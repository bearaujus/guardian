package metabase_test

import (
	"context"
	"errors"
	"testing"

	"github.com/goto/guardian/pkg/log"

	"github.com/goto/guardian/core/provider"
	"github.com/goto/guardian/domain"
	"github.com/goto/guardian/mocks"
	"github.com/goto/guardian/plugins/providers/metabase"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestGetType(t *testing.T) {
	t.Run("should return provider type name", func(t *testing.T) {
		expectedTypeName := domain.ProviderTypeMetabase
		logger := log.NewCtxLogger("info", []string{"test"})
		crypto := new(mocks.Crypto)
		p := metabase.NewProvider(expectedTypeName, crypto, logger)

		actualTypeName := p.GetType()

		assert.Equal(t, expectedTypeName, actualTypeName)
	})
}

func TestCreateConfig(t *testing.T) {
	t.Run("should return error if there credentials are invalid", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		testcases := []struct {
			pc   *domain.ProviderConfig
			name string
		}{
			{
				name: "invalid credentials struct",
				pc: &domain.ProviderConfig{
					Credentials: "invalid-credential-structure"},
			},
			{
				name: "empty mandatory credentials",
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "",
						Username: "",
						Password: "",
					},
				},
			},
		}

		for _, tc := range testcases {
			t.Run(tc.name, func(t *testing.T) {
				actualError := p.CreateConfig(tc.pc)
				assert.Error(t, actualError)
			})
		}
	})

	t.Run("should return error if there resource config is invalid", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		testcases := []struct {
			pc *domain.ProviderConfig
		}{
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: "invalid resource type",
						},
					},
				},
			},
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: metabase.ResourceTypeDatabase,
							Roles: []*domain.Role{
								{
									ID:          "viewer",
									Permissions: []interface{}{"wrong permissions"},
								},
							},
						},
					},
				},
			},
		}

		for _, tc := range testcases {
			actualError := p.CreateConfig(tc.pc)
			assert.Error(t, actualError)
		}
	})

	t.Run("should not return error if parse and valid of Credentials are correct", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		crypto.On("Encrypt", "test-password").Return("encrypted-test-pasword", nil)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		testcases := []struct {
			pc            *domain.ProviderConfig
			expectedError error
		}{
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: metabase.ResourceTypeCollection,
							Roles: []*domain.Role{
								{
									ID:          "viewer",
									Permissions: []interface{}{"write"},
								},
							},
						},
					},
					URN: providerURN,
				},
				expectedError: nil,
			},
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: metabase.ResourceTypeDatabase,
							Roles: []*domain.Role{
								{
									ID:          "viewer",
									Permissions: []interface{}{"native:write"},
								},
							},
						},
					},
					URN: providerURN,
				},
				expectedError: nil,
			},
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: metabase.ResourceTypeTable,
							Roles: []*domain.Role{
								{
									ID:          "viewer",
									Permissions: []interface{}{"all"},
								},
							},
						},
					},
					URN: providerURN,
				},
				expectedError: nil,
			},
			{
				pc: &domain.ProviderConfig{
					Credentials: metabase.Credentials{
						Host:     "localhost",
						Username: "test-username",
						Password: "test-password",
					},
					Resources: []*domain.ResourceConfig{
						{
							Type: metabase.ResourceTypeGroup,
							Roles: []*domain.Role{
								{
									ID:          "viewer",
									Permissions: []interface{}{"member"},
								},
							},
						},
					},
					URN: providerURN,
				},
				expectedError: nil,
			},
		}

		for _, tc := range testcases {
			actualError := p.CreateConfig(tc.pc)
			assert.Equal(t, tc.expectedError, actualError)
			crypto.AssertExpectations(t)
		}
	})
}

func TestGetResources(t *testing.T) {
	ctx := context.Background()
	t.Run("should return error if credentials is invalid", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)

		pc := &domain.ProviderConfig{
			Credentials: "invalid-creds",
		}

		actualResources, actualError := p.GetResources(ctx, pc)

		assert.Nil(t, actualResources)
		assert.Error(t, actualError)
	})

	t.Run("should return error if there are any on client initialization", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)

		expectedError := errors.New("decrypt error")
		crypto.On("Decrypt", "test-password").Return("", expectedError).Once()
		pc := &domain.ProviderConfig{
			Credentials: map[string]interface{}{
				"password": "test-password",
			},
		}

		actualResources, actualError := p.GetResources(ctx, pc)

		assert.Nil(t, actualResources)
		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("should return error if got any on getting database resources", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		pc := &domain.ProviderConfig{
			URN:         providerURN,
			Credentials: map[string]interface{}{},
			Resources: []*domain.ResourceConfig{
				{
					Type: metabase.ResourceTypeDatabase,
				},
			},
		}
		expectedError := errors.New("client error")
		client.On("GetDatabases", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return(nil, expectedError).Once()

		actualResources, actualError := p.GetResources(ctx, pc)

		assert.Nil(t, actualResources)
		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("should return error if got any on getting collection resources", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		pc := &domain.ProviderConfig{
			URN:         providerURN,
			Credentials: map[string]interface{}{},
			Resources: []*domain.ResourceConfig{
				{
					Type: metabase.ResourceTypeCollection,
				},
			},
		}
		expectedError := errors.New("client error")
		client.On("GetCollections", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return(nil, expectedError).Once()

		actualResources, actualError := p.GetResources(ctx, pc)

		assert.Nil(t, actualResources)
		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("should return list of resources and nil error on success", func(t *testing.T) {
		providerURN := "test-provider-urn"
		crypto := new(mocks.Crypto)
		client := new(mocks.MetabaseClient)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		p.Clients = map[string]metabase.MetabaseClient{
			providerURN: client,
		}

		pc := &domain.ProviderConfig{
			URN:         providerURN,
			Credentials: map[string]interface{}{},
			Resources: []*domain.ResourceConfig{
				{
					Type: metabase.ResourceTypeDatabase,
				}, {
					Type: metabase.ResourceTypeTable,
				},
				{
					Type: metabase.ResourceTypeCollection,
				}, {
					Type: metabase.ResourceTypeGroup,
				},
			},
		}
		expectedDatabases := []*metabase.Database{
			{
				ID:     1,
				Name:   "db_1",
				Tables: []metabase.Table{{ID: 2, Name: "table_1", DbId: 1}},
			},
		}
		client.On("GetDatabases", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return(expectedDatabases, nil).Once()

		d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
		c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
		group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}

		client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group, {Name: metabase.GuardianGroupPrefix + "database_1_schema:all", DatabaseResources: d, CollectionResources: c}},
			metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
			metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

		expectedCollections := []*metabase.Collection{
			{
				ID:   1,
				Name: "col_1",
			},
		}
		client.On("GetCollections", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return(expectedCollections, nil).Once()
		expectedResources := []*domain.Resource{
			{
				Type:        metabase.ResourceTypeDatabase,
				URN:         "database:1",
				ProviderURN: providerURN,
				Name:        "db_1",
				Details: map[string]interface{}{
					"auto_run_queries":            false,
					"cache_field_values_schedule": "",
					"engine":                      "",
					"metadata_sync_schedule":      "",
					"native_permissions":          "",
					"timezone":                    "",
					"groups":                      []map[string]interface{}{{"urn": "group:1", "permissions": []string{"read", "write"}}},
				},
				GlobalURN: "urn:metabase:test-provider-urn:database:1",
			}, {
				Type:        metabase.ResourceTypeTable,
				URN:         "table:1.2",
				ProviderURN: providerURN,
				Name:        "table_1",
				Details: map[string]interface{}{
					"auto_run_queries":            false,
					"cache_field_values_schedule": "",
					"engine":                      "",
					"metadata_sync_schedule":      "",
					"native_permissions":          "",
					"timezone":                    "",
				},
				GlobalURN: "urn:metabase:test-provider-urn:table:1",
			},
			{
				Type:        metabase.ResourceTypeCollection,
				URN:         "collection:1",
				ProviderURN: providerURN,
				Name:        "col_1",
				Details: map[string]interface{}{
					"groups": []map[string]interface{}{{"urn": "group:1", "permissions": []string{"write"}}},
				},
				GlobalURN: "urn:metabase:test-provider-urn:collection:1",
			},
			{
				Type:        metabase.ResourceTypeGroup,
				URN:         "group:0",
				ProviderURN: providerURN,
				Name:        "All Users",
				Details: map[string]interface{}{
					"collection": []*metabase.GroupResource{{Name: "col_1", Type: "collection", Urn: "collection:1", Permissions: []string{"read", "write"}}},
					"database":   []*metabase.GroupResource{{Name: "db_1", Type: "database", Urn: "database:1", Permissions: []string{"read", "write"}}},
				},
				GlobalURN: "urn:metabase:test-provider-urn:group:0",
			},
		}

		actualResources, actualError := p.GetResources(ctx, pc)

		assert.Equal(t, expectedResources, actualResources)
		assert.Nil(t, actualError)
	})
}

func TestGrantAccess(t *testing.T) {
	ctx := context.Background()
	t.Run("should return error if credentials is invalid", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)

		pc := &domain.ProviderConfig{
			Credentials: "invalid-credentials",
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.GrantAccess(ctx, pc, a)
		assert.Error(t, actualError)
	})

	t.Run("should return decrypt error if there are any on client initialization", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		expectedError := errors.New("decrypt error")
		crypto.On("Decrypt", "test-password").Return("", expectedError).Once()

		pc := &domain.ProviderConfig{
			Credentials: metabase.Credentials{
				Host:     "localhost",
				Username: "test-username",
				Password: "test-password",
			},
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.GrantAccess(ctx, pc, a)

		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("should return error if resource type in unknown", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		expectedError := errors.New("invalid resource type")
		crypto.On("Decrypt", "test-password").Return("", expectedError).Once()

		pc := &domain.ProviderConfig{
			Credentials: metabase.Credentials{
				Host:     "localhost",
				Username: "test-username",
				Password: "test-password",
			},
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
			URN: "test-urn",
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.GrantAccess(ctx, pc, a)

		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("given database resource", func(t *testing.T) {
		t.Run("should return error if there is an error in revoking database access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantDatabaseAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), mock.Anything, mock.Anything, mock.Anything, mock.Anything).
				Return(expectedError).Once()
			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeDatabase,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeDatabase,
					URN:  "database:999",
					Name: "test-database",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if granting access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			logger := log.NewCtxLogger("info", []string{"test"})
			client := new(mocks.MetabaseClient)
			expectedDatabase := &metabase.Database{
				Name: "test-database",
				ID:   999,
			}
			expectedUser := "test@email.com"
			expectedRole := metabase.DatabaseRoleViewer
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantDatabaseAccess", expectedDatabase, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeDatabase,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeDatabase,
					URN:  "database:999",
					Name: "test-database",
				},
				Role:       "viewer",
				AccountID:  expectedUser,
				ResourceID: "999",
				ID:         "999",
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.Nil(t, actualError)
		})
	})

	t.Run("given collection resource", func(t *testing.T) {
		t.Run("should return error if there is an error in granting collection access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantCollectionAccess", mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return(expectedError).Once()

			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeCollection,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeCollection,
					URN:  "collection:999",
					Name: "test-collection",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if granting access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			expectedCollection := &metabase.Collection{
				Name: "test-collection",
				ID:   999,
			}
			expectedUser := "test@email.com"
			expectedRole := "viewer"
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)

			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantCollectionAccess", expectedCollection, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeCollection,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeCollection,
					URN:  "collection:999",
					Name: "test-collection",
				},
				Role:       "viewer",
				AccountID:  expectedUser,
				ResourceID: "999",
				ID:         "999",
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.Nil(t, actualError)
		})
	})

	t.Run("given Group resource", func(t *testing.T) {
		t.Run("should return error if there is an error in granting group access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantGroupAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), mock.Anything, mock.Anything).Return(expectedError).Once()
			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeGroup,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeGroup,
					URN:  "group:999",
					Name: "test-group",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
			client.AssertExpectations(t)
		})

		t.Run("should return nil error if granting access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			logger := log.NewCtxLogger("info", []string{"test"})
			client := new(mocks.MetabaseClient)
			expectedGroupID := 999
			expectedEmail := "test@email.com"
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantGroupAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), expectedGroupID, expectedEmail).Return(nil).Once()
			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeGroup,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeGroup,
					URN:  "group:999",
					Name: "test-group",
				},
				Role:       "viewer",
				AccountID:  expectedEmail,
				ResourceID: "999",
				ID:         "999",
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.Nil(t, actualError)
			client.AssertExpectations(t)
		})
	})

	t.Run("given Table resource", func(t *testing.T) {
		t.Run("should return error if there is an error in granting table access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			expectedUser := "test@email.com"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantTableAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return(expectedError).Once()

			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeTable,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeTable,
					URN:  "table:999.1000",
					Name: "test-database",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if granting table access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			expectedTable := &metabase.Table{
				Name: "test-table",
				ID:   1000,
				DbId: 999,
			}
			expectedUser := "test@email.com"
			expectedRole := "viewer"
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)

			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("GrantTableAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), expectedTable, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			d := []*metabase.GroupResource{{Urn: "database:1", Permissions: []string{"read", "write"}}}
			c := []*metabase.GroupResource{{Urn: "collection:1", Permissions: []string{"read", "write"}}}
			group := metabase.Group{Name: "All Users", DatabaseResources: d, CollectionResources: c}
			client.On("GetGroups", mock.MatchedBy(func(ctx context.Context) bool { return true })).Return([]*metabase.Group{&group},
				metabase.ResourceGroupDetails{"database:1": {{"urn": "group:1", "permissions": []string{"read", "write"}}}},
				metabase.ResourceGroupDetails{"collection:1": {{"urn": "group:1", "permissions": []string{"write"}}}}, nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeTable,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeTable,
					URN:  "table:999.1000",
					Name: "test-table",
				},
				Role:        "viewer",
				Permissions: []string{expectedRole},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.GrantAccess(ctx, pc, a)

			assert.Nil(t, actualError)
			client.AssertExpectations(t)
		})
	})
}

func TestRevokeAccess(t *testing.T) {
	ctx := context.Background()
	t.Run("should return error if credentials is invalid", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)

		pc := &domain.ProviderConfig{
			Credentials: "invalid-credentials",
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.RevokeAccess(ctx, pc, a)
		assert.Error(t, actualError)
	})

	t.Run("should return error if there are any on client initialization", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		expectedError := errors.New("decrypt error")
		crypto.On("Decrypt", "test-password").Return("", expectedError).Once()

		pc := &domain.ProviderConfig{
			Credentials: metabase.Credentials{
				Host:     "localhost",
				Username: "test-username",
				Password: "test-password",
			},
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.RevokeAccess(ctx, pc, a)

		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("should return error if resource type in unknown", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("", crypto, logger)
		expectedError := errors.New("invalid resource type")
		crypto.On("Decrypt", "test-password").Return("", expectedError).Once()

		pc := &domain.ProviderConfig{
			Credentials: metabase.Credentials{
				Host:     "localhost",
				Username: "test-username",
				Password: "test-password",
			},
			Resources: []*domain.ResourceConfig{
				{
					Type: "test-type",
					Roles: []*domain.Role{
						{
							ID:          "test-role",
							Permissions: []interface{}{"test-permission-config"},
						},
					},
				},
			},
			URN: "test-urn",
		}
		a := domain.Grant{
			Resource: &domain.Resource{
				Type: "test-type",
			},
			Role: "test-role",
		}

		actualError := p.RevokeAccess(ctx, pc, a)

		assert.EqualError(t, actualError, expectedError.Error())
	})

	t.Run("given database resource", func(t *testing.T) {
		t.Run("should return error if there is an error in revoking database access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeDatabaseAccess", mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return(expectedError).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeDatabase,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeDatabase,
					URN:  "database:999",
					Name: "test-database",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if revoking database access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			logger := log.NewCtxLogger("info", []string{"test"})
			client := new(mocks.MetabaseClient)
			expectedDatabase := &metabase.Database{
				Name: "test-database",
				ID:   999,
			}
			expectedUser := "test@email.com"
			expectedRole := metabase.DatabaseRoleViewer
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeDatabaseAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), expectedDatabase, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeDatabase,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeDatabase,
					URN:  "database:999",
					Name: "test-database",
				},
				Role:        "viewer",
				Permissions: []string{expectedRole},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.Nil(t, actualError)
			client.AssertExpectations(t)
		})
	})

	t.Run("given collection resource", func(t *testing.T) {
		t.Run("should return error if there is an error in revoking collection access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeCollectionAccess", mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return(expectedError).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeCollection,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeCollection,
					URN:  "collection:999",
					Name: "test-collection",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if revoking access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			expectedCollection := &metabase.Collection{
				Name: "test-collection",
				ID:   999,
			}
			expectedUser := "test@email.com"
			expectedRole := "viewer"
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)

			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeCollectionAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), expectedCollection, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeCollection,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeCollection,
					URN:  "collection:999",
					Name: "test-collection",
				},
				Role:        "viewer",
				Permissions: []string{expectedRole},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.Nil(t, actualError)
			client.AssertExpectations(t)
		})
	})

	t.Run("given Group resource", func(t *testing.T) {
		t.Run("should return error if there is an error in revoking group access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeGroupAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), mock.Anything, mock.Anything).Return(expectedError).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeGroup,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeGroup,
					URN:  "group:999",
					Name: "test-group",
				},
				Role: "test-role",
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})
	})

	t.Run("given Table resource", func(t *testing.T) {
		t.Run("should return error if there is an error in revoking table access", func(t *testing.T) {
			providerURN := "test-provider-urn"
			expectedError := errors.New("client error")
			expectedUser := "test@email.com"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)
			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeTableAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), mock.Anything, mock.Anything, mock.Anything, mock.Anything).Return(expectedError).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeTable,
						Roles: []*domain.Role{
							{
								ID:          "test-role",
								Permissions: []interface{}{"test-permission-config"},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeTable,
					URN:  "table:999.1000",
					Name: "test-database",
				},
				Role:        "test-role",
				Permissions: []string{"test-permission-config"},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.EqualError(t, actualError, expectedError.Error())
		})

		t.Run("should return nil error if revoking table access is successful", func(t *testing.T) {
			providerURN := "test-provider-urn"
			crypto := new(mocks.Crypto)
			client := new(mocks.MetabaseClient)
			expectedTable := &metabase.Table{
				Name: "test-table",
				ID:   1000,
				DbId: 999,
			}
			expectedUser := "test@email.com"
			expectedRole := "viewer"
			logger := log.NewCtxLogger("info", []string{"test"})
			p := metabase.NewProvider("", crypto, logger)

			p.Clients = map[string]metabase.MetabaseClient{
				providerURN: client,
			}
			client.On("RevokeTableAccess", mock.MatchedBy(func(ctx context.Context) bool { return true }), expectedTable, expectedUser, expectedRole, mock.Anything).Return(nil).Once()

			pc := &domain.ProviderConfig{
				Credentials: metabase.Credentials{
					Host:     "localhost",
					Username: "test-username",
					Password: "test-password",
				},
				Resources: []*domain.ResourceConfig{
					{
						Type: metabase.ResourceTypeTable,
						Roles: []*domain.Role{
							{
								ID:          "viewer",
								Permissions: []interface{}{expectedRole},
							},
						},
					},
				},
				URN: providerURN,
			}
			a := domain.Grant{
				Resource: &domain.Resource{
					Type: metabase.ResourceTypeTable,
					URN:  "table:999.1000",
					Name: "test-table",
				},
				Role:        "viewer",
				Permissions: []string{expectedRole},
				AccountID:   expectedUser,
				ResourceID:  "999",
				ID:          "999",
			}

			actualError := p.RevokeAccess(ctx, pc, a)

			assert.Nil(t, actualError)
			client.AssertExpectations(t)
		})
	})
}

func TestGetAccountTypes(t *testing.T) {
	expectedAccountType := []string{"user"}
	crypto := new(mocks.Crypto)
	logger := log.NewCtxLogger("info", []string{"test"})
	p := metabase.NewProvider("", crypto, logger)

	actualAccountType := p.GetAccountTypes()

	assert.Equal(t, expectedAccountType, actualAccountType)
}

func TestGetRoles(t *testing.T) {
	t.Run("should return error if resource type is invalid", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("metabase", crypto, logger)
		validConfig := &domain.ProviderConfig{
			Type:                "metabase",
			URN:                 "test-URN",
			AllowedAccountTypes: []string{"user"},
			Credentials:         map[string]interface{}{},
			Resources: []*domain.ResourceConfig{
				{
					Type: "database",
					Policy: &domain.PolicyConfig{
						ID:      "test-policy-1",
						Version: 1,
					},
				},
				{
					Type: "group",
					Policy: &domain.PolicyConfig{
						ID:      "test-policy-2",
						Version: 1,
					},
				},
			},
		}

		actualRoles, actualError := p.GetRoles(validConfig, "invalid_resource_type")

		assert.Nil(t, actualRoles)
		assert.ErrorIs(t, actualError, provider.ErrInvalidResourceType)
	})

	t.Run("should return roles specified in the provider config", func(t *testing.T) {
		crypto := new(mocks.Crypto)
		logger := log.NewCtxLogger("info", []string{"test"})
		p := metabase.NewProvider("metabase", crypto, logger)

		expectedRoles := []*domain.Role{
			{
				ID:   "test-role",
				Name: "test_role_name",
			},
		}

		validConfig := &domain.ProviderConfig{
			Type:                "metabase",
			URN:                 "test-URN",
			AllowedAccountTypes: []string{"user"},
			Credentials:         map[string]interface{}{},
			Resources: []*domain.ResourceConfig{
				{
					Type: "database",
					Policy: &domain.PolicyConfig{
						ID:      "test-policy-1",
						Version: 1,
					},
					Roles: expectedRoles,
				},
			},
		}

		actualRoles, actualError := p.GetRoles(validConfig, "database")

		assert.NoError(t, actualError)
		assert.Equal(t, expectedRoles, actualRoles)
	})
}
