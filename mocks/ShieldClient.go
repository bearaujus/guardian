// Code generated by mockery v2.32.0. DO NOT EDIT.

package mocks

import (
	context "context"

	shield "github.com/goto/guardian/plugins/providers/shield"
	mock "github.com/stretchr/testify/mock"
)

// ShieldClient is an autogenerated mock type for the ShieldClient type
type ShieldClient struct {
	mock.Mock
}

// GetOrganizations provides a mock function with given fields: ctx
func (_m *ShieldClient) GetOrganizations(ctx context.Context) ([]*shield.Organization, error) {
	ret := _m.Called(ctx)

	var r0 []*shield.Organization
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) ([]*shield.Organization, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) []*shield.Organization); ok {
		r0 = rf(ctx)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*shield.Organization)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetProjects provides a mock function with given fields: ctx
func (_m *ShieldClient) GetProjects(ctx context.Context) ([]*shield.Project, error) {
	ret := _m.Called(ctx)

	var r0 []*shield.Project
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) ([]*shield.Project, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) []*shield.Project); ok {
		r0 = rf(ctx)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*shield.Project)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetSelfUser provides a mock function with given fields: ctx, email
func (_m *ShieldClient) GetSelfUser(ctx context.Context, email string) (*shield.User, error) {
	ret := _m.Called(ctx, email)

	var r0 *shield.User
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, string) (*shield.User, error)); ok {
		return rf(ctx, email)
	}
	if rf, ok := ret.Get(0).(func(context.Context, string) *shield.User); ok {
		r0 = rf(ctx, email)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*shield.User)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, string) error); ok {
		r1 = rf(ctx, email)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetTeams provides a mock function with given fields: ctx
func (_m *ShieldClient) GetTeams(ctx context.Context) ([]*shield.Team, error) {
	ret := _m.Called(ctx)

	var r0 []*shield.Team
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) ([]*shield.Team, error)); ok {
		return rf(ctx)
	}
	if rf, ok := ret.Get(0).(func(context.Context) []*shield.Team); ok {
		r0 = rf(ctx)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*shield.Team)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(ctx)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantOrganizationAccess provides a mock function with given fields: ctx, organization, userId, role
func (_m *ShieldClient) GrantOrganizationAccess(ctx context.Context, organization *shield.Organization, userId string, role string) error {
	ret := _m.Called(ctx, organization, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Organization, string, string) error); ok {
		r0 = rf(ctx, organization, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// GrantProjectAccess provides a mock function with given fields: ctx, project, userId, role
func (_m *ShieldClient) GrantProjectAccess(ctx context.Context, project *shield.Project, userId string, role string) error {
	ret := _m.Called(ctx, project, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Project, string, string) error); ok {
		r0 = rf(ctx, project, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// GrantTeamAccess provides a mock function with given fields: ctx, team, userId, role
func (_m *ShieldClient) GrantTeamAccess(ctx context.Context, team *shield.Team, userId string, role string) error {
	ret := _m.Called(ctx, team, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Team, string, string) error); ok {
		r0 = rf(ctx, team, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RevokeOrganizationAccess provides a mock function with given fields: ctx, organization, userId, role
func (_m *ShieldClient) RevokeOrganizationAccess(ctx context.Context, organization *shield.Organization, userId string, role string) error {
	ret := _m.Called(ctx, organization, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Organization, string, string) error); ok {
		r0 = rf(ctx, organization, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RevokeProjectAccess provides a mock function with given fields: ctx, project, userId, role
func (_m *ShieldClient) RevokeProjectAccess(ctx context.Context, project *shield.Project, userId string, role string) error {
	ret := _m.Called(ctx, project, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Project, string, string) error); ok {
		r0 = rf(ctx, project, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RevokeTeamAccess provides a mock function with given fields: ctx, team, userId, role
func (_m *ShieldClient) RevokeTeamAccess(ctx context.Context, team *shield.Team, userId string, role string) error {
	ret := _m.Called(ctx, team, userId, role)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *shield.Team, string, string) error); ok {
		r0 = rf(ctx, team, userId, role)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// NewShieldClient creates a new instance of ShieldClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewShieldClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *ShieldClient {
	mock := &ShieldClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
