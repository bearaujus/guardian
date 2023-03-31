package newpoc

import (
	"context"

	"github.com/goto/guardian/domain"
)

// domain/provider.go
//
// type ProviderConfigEncryptor interface {
// 	Encrypt(context.Context, *Provider) error
// }
//
// type Provider struct{}
// func (p *Provider) Encrypt(ctx context.Context, e ProviderConfigEncryptor) error {
// 	return e.Encrypt(ctx, p)
// }

// plugin will export two main structs. 1. ConfigManager, 2. Client

// TODO: all of these interfaces should be defined in core/provider/service.go only

// ConfigManager mostly will be used for CRUD of provider config
type IConfigManager interface {
	Validate(context.Context, *domain.Provider) error
	Encrypt(context.Context, *domain.Provider) error
	Decrypt(context.Context, *domain.Provider) error
}

// BasicProviderClient depends on a valid provider config
type BasicProviderClient interface {
	// GetType() string // Will be part of providerService or anything that initiate the provider client
	GetAllowedAccountTypes(context.Context) []string
	ListResources(context.Context) ([]IResource, error)
	GrantAccess(ctx context.Context, r IResource, accountID string, permissions []string) error
	RevokeAccess(ctx context.Context, r IResource, accountID string, permissions []string) error
}

type IResource interface {
	GetType() string
	// GetURN() string
	// GetDisplayName() string
}

type RoleManager interface {
	// for api: GET /providers/:id/resources/:type/roles
	ListRoles(context.Context) ([]IRole, error)
}

type IRole interface {
	GetID() string
	GetDisplayName() string
	GetDescription() string
	GetPermissions() []string
}

type PermissionManager interface {
	ListPermissions(ctx context.Context, resourceType, role string) ([]IPermission, error)
}

type IPermission interface {
	GetID() string
}

type ActivityExtractor interface {
	ListActivities(ctx context.Context) ([]IActivity, error)
}

type IActivity interface {
	GetID() string
	// TODO: complete methods of activity interface
}

// type Dataset struct {}
// func (d Dataset) GetType() string { return "dataset"}

// type Table struct {}
// func (t Table) GetType() string { return "table"}

// type IBigQueryResource interface {
// 	Dataset | Table
// }

// type BigQueryResource[T IBigQueryResource] struct {

// }

// in provider service struct:
// cached bigqueryClient for provider A (credentials A)
// cached bigqueryClient for provider B (credentials B)
// cached gcsCLient for provider C (credentials C)

// provider config:
//   resource type config:
//     roles config:
//     - id: my-custom-role-1
//       permissions: roleA, roleB
//     - id: my-custom-role-2
//       permissions: roleB, roleC

// gcp
// role: roles/viewer, roles/bigquery.dataViewer, etc.
// permissions: projects.list, projects.get, datasets.list, etc.

// pv.PermissionManager
// grafana
// metabase
// shield
// tableau

// provider.PermissionManager
// bigquery
// gcloudiam
// gcs
// noop
