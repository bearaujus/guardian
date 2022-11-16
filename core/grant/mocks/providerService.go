// Code generated by mockery v2.10.0. DO NOT EDIT.

package mocks

import (
	context "context"

	domain "github.com/odpf/guardian/domain"

	mock "github.com/stretchr/testify/mock"
)

// ProviderService is an autogenerated mock type for the providerService type
type ProviderService struct {
	mock.Mock
}

type ProviderService_Expecter struct {
	mock *mock.Mock
}

func (_m *ProviderService) EXPECT() *ProviderService_Expecter {
	return &ProviderService_Expecter{mock: &_m.Mock}
}

// GetByID provides a mock function with given fields: _a0, _a1
func (_m *ProviderService) GetByID(_a0 context.Context, _a1 string) (*domain.Provider, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *domain.Provider
	if rf, ok := ret.Get(0).(func(context.Context, string) *domain.Provider); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*domain.Provider)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, string) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ProviderService_GetByID_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetByID'
type ProviderService_GetByID_Call struct {
	*mock.Call
}

// GetByID is a helper method to define mock.On call
//  - _a0 context.Context
//  - _a1 string
func (_e *ProviderService_Expecter) GetByID(_a0 interface{}, _a1 interface{}) *ProviderService_GetByID_Call {
	return &ProviderService_GetByID_Call{Call: _e.mock.On("GetByID", _a0, _a1)}
}

func (_c *ProviderService_GetByID_Call) Run(run func(_a0 context.Context, _a1 string)) *ProviderService_GetByID_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(string))
	})
	return _c
}

func (_c *ProviderService_GetByID_Call) Return(_a0 *domain.Provider, _a1 error) *ProviderService_GetByID_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

// ListAccess provides a mock function with given fields: _a0, _a1, _a2
func (_m *ProviderService) ListAccess(_a0 context.Context, _a1 domain.Provider, _a2 []*domain.Resource) (domain.MapResourceAccess, error) {
	ret := _m.Called(_a0, _a1, _a2)

	var r0 domain.MapResourceAccess
	if rf, ok := ret.Get(0).(func(context.Context, domain.Provider, []*domain.Resource) domain.MapResourceAccess); ok {
		r0 = rf(_a0, _a1, _a2)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(domain.MapResourceAccess)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, domain.Provider, []*domain.Resource) error); ok {
		r1 = rf(_a0, _a1, _a2)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ProviderService_ListAccess_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListAccess'
type ProviderService_ListAccess_Call struct {
	*mock.Call
}

// ListAccess is a helper method to define mock.On call
//  - _a0 context.Context
//  - _a1 domain.Provider
//  - _a2 []*domain.Resource
func (_e *ProviderService_Expecter) ListAccess(_a0 interface{}, _a1 interface{}, _a2 interface{}) *ProviderService_ListAccess_Call {
	return &ProviderService_ListAccess_Call{Call: _e.mock.On("ListAccess", _a0, _a1, _a2)}
}

func (_c *ProviderService_ListAccess_Call) Run(run func(_a0 context.Context, _a1 domain.Provider, _a2 []*domain.Resource)) *ProviderService_ListAccess_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(domain.Provider), args[2].([]*domain.Resource))
	})
	return _c
}

func (_c *ProviderService_ListAccess_Call) Return(_a0 domain.MapResourceAccess, _a1 error) *ProviderService_ListAccess_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

// RevokeAccess provides a mock function with given fields: _a0, _a1
func (_m *ProviderService) RevokeAccess(_a0 context.Context, _a1 domain.Grant) error {
	ret := _m.Called(_a0, _a1)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, domain.Grant) error); ok {
		r0 = rf(_a0, _a1)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// ProviderService_RevokeAccess_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'RevokeAccess'
type ProviderService_RevokeAccess_Call struct {
	*mock.Call
}

// RevokeAccess is a helper method to define mock.On call
//  - _a0 context.Context
//  - _a1 domain.Grant
func (_e *ProviderService_Expecter) RevokeAccess(_a0 interface{}, _a1 interface{}) *ProviderService_RevokeAccess_Call {
	return &ProviderService_RevokeAccess_Call{Call: _e.mock.On("RevokeAccess", _a0, _a1)}
}

func (_c *ProviderService_RevokeAccess_Call) Run(run func(_a0 context.Context, _a1 domain.Grant)) *ProviderService_RevokeAccess_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(domain.Grant))
	})
	return _c
}

func (_c *ProviderService_RevokeAccess_Call) Return(_a0 error) *ProviderService_RevokeAccess_Call {
	_c.Call.Return(_a0)
	return _c
}