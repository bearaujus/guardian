// Code generated by mockery v2.33.0. DO NOT EDIT.

package mocks

import (
	context "context"

	grant "github.com/goto/guardian/core/grant"
	domain "github.com/goto/guardian/domain"

	mock "github.com/stretchr/testify/mock"
)

// GrantService is an autogenerated mock type for the grantService type
type GrantService struct {
	mock.Mock
}

type GrantService_Expecter struct {
	mock *mock.Mock
}

func (_m *GrantService) EXPECT() *GrantService_Expecter {
	return &GrantService_Expecter{mock: &_m.Mock}
}

// BulkRevoke provides a mock function with given fields: ctx, filter, actor, reason
func (_m *GrantService) BulkRevoke(ctx context.Context, filter domain.RevokeGrantsFilter, actor string, reason string) ([]*domain.Grant, error) {
	ret := _m.Called(ctx, filter, actor, reason)

	var r0 []*domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, domain.RevokeGrantsFilter, string, string) ([]*domain.Grant, error)); ok {
		return rf(ctx, filter, actor, reason)
	}
	if rf, ok := ret.Get(0).(func(context.Context, domain.RevokeGrantsFilter, string, string) []*domain.Grant); ok {
		r0 = rf(ctx, filter, actor, reason)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, domain.RevokeGrantsFilter, string, string) error); ok {
		r1 = rf(ctx, filter, actor, reason)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_BulkRevoke_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'BulkRevoke'
type GrantService_BulkRevoke_Call struct {
	*mock.Call
}

// BulkRevoke is a helper method to define mock.On call
//   - ctx context.Context
//   - filter domain.RevokeGrantsFilter
//   - actor string
//   - reason string
func (_e *GrantService_Expecter) BulkRevoke(ctx interface{}, filter interface{}, actor interface{}, reason interface{}) *GrantService_BulkRevoke_Call {
	return &GrantService_BulkRevoke_Call{Call: _e.mock.On("BulkRevoke", ctx, filter, actor, reason)}
}

func (_c *GrantService_BulkRevoke_Call) Run(run func(ctx context.Context, filter domain.RevokeGrantsFilter, actor string, reason string)) *GrantService_BulkRevoke_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(domain.RevokeGrantsFilter), args[2].(string), args[3].(string))
	})
	return _c
}

func (_c *GrantService_BulkRevoke_Call) Return(_a0 []*domain.Grant, _a1 error) *GrantService_BulkRevoke_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_BulkRevoke_Call) RunAndReturn(run func(context.Context, domain.RevokeGrantsFilter, string, string) ([]*domain.Grant, error)) *GrantService_BulkRevoke_Call {
	_c.Call.Return(run)
	return _c
}

// GetByID provides a mock function with given fields: _a0, _a1
func (_m *GrantService) GetByID(_a0 context.Context, _a1 string) (*domain.Grant, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, string) (*domain.Grant, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, string) *domain.Grant); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, string) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_GetByID_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetByID'
type GrantService_GetByID_Call struct {
	*mock.Call
}

// GetByID is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 string
func (_e *GrantService_Expecter) GetByID(_a0 interface{}, _a1 interface{}) *GrantService_GetByID_Call {
	return &GrantService_GetByID_Call{Call: _e.mock.On("GetByID", _a0, _a1)}
}

func (_c *GrantService_GetByID_Call) Run(run func(_a0 context.Context, _a1 string)) *GrantService_GetByID_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(string))
	})
	return _c
}

func (_c *GrantService_GetByID_Call) Return(_a0 *domain.Grant, _a1 error) *GrantService_GetByID_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_GetByID_Call) RunAndReturn(run func(context.Context, string) (*domain.Grant, error)) *GrantService_GetByID_Call {
	_c.Call.Return(run)
	return _c
}

// GetGrantsTotalCount provides a mock function with given fields: _a0, _a1
func (_m *GrantService) GetGrantsTotalCount(_a0 context.Context, _a1 domain.ListGrantsFilter) (int64, error) {
	ret := _m.Called(_a0, _a1)

	var r0 int64
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, domain.ListGrantsFilter) (int64, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, domain.ListGrantsFilter) int64); ok {
		r0 = rf(_a0, _a1)
	} else {
		r0 = ret.Get(0).(int64)
	}

	if rf, ok := ret.Get(1).(func(context.Context, domain.ListGrantsFilter) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_GetGrantsTotalCount_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetGrantsTotalCount'
type GrantService_GetGrantsTotalCount_Call struct {
	*mock.Call
}

// GetGrantsTotalCount is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 domain.ListGrantsFilter
func (_e *GrantService_Expecter) GetGrantsTotalCount(_a0 interface{}, _a1 interface{}) *GrantService_GetGrantsTotalCount_Call {
	return &GrantService_GetGrantsTotalCount_Call{Call: _e.mock.On("GetGrantsTotalCount", _a0, _a1)}
}

func (_c *GrantService_GetGrantsTotalCount_Call) Run(run func(_a0 context.Context, _a1 domain.ListGrantsFilter)) *GrantService_GetGrantsTotalCount_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(domain.ListGrantsFilter))
	})
	return _c
}

func (_c *GrantService_GetGrantsTotalCount_Call) Return(_a0 int64, _a1 error) *GrantService_GetGrantsTotalCount_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_GetGrantsTotalCount_Call) RunAndReturn(run func(context.Context, domain.ListGrantsFilter) (int64, error)) *GrantService_GetGrantsTotalCount_Call {
	_c.Call.Return(run)
	return _c
}

// ImportFromProvider provides a mock function with given fields: ctx, criteria
func (_m *GrantService) ImportFromProvider(ctx context.Context, criteria grant.ImportFromProviderCriteria) ([]*domain.Grant, error) {
	ret := _m.Called(ctx, criteria)

	var r0 []*domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, grant.ImportFromProviderCriteria) ([]*domain.Grant, error)); ok {
		return rf(ctx, criteria)
	}
	if rf, ok := ret.Get(0).(func(context.Context, grant.ImportFromProviderCriteria) []*domain.Grant); ok {
		r0 = rf(ctx, criteria)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, grant.ImportFromProviderCriteria) error); ok {
		r1 = rf(ctx, criteria)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_ImportFromProvider_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ImportFromProvider'
type GrantService_ImportFromProvider_Call struct {
	*mock.Call
}

// ImportFromProvider is a helper method to define mock.On call
//   - ctx context.Context
//   - criteria grant.ImportFromProviderCriteria
func (_e *GrantService_Expecter) ImportFromProvider(ctx interface{}, criteria interface{}) *GrantService_ImportFromProvider_Call {
	return &GrantService_ImportFromProvider_Call{Call: _e.mock.On("ImportFromProvider", ctx, criteria)}
}

func (_c *GrantService_ImportFromProvider_Call) Run(run func(ctx context.Context, criteria grant.ImportFromProviderCriteria)) *GrantService_ImportFromProvider_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(grant.ImportFromProviderCriteria))
	})
	return _c
}

func (_c *GrantService_ImportFromProvider_Call) Return(_a0 []*domain.Grant, _a1 error) *GrantService_ImportFromProvider_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_ImportFromProvider_Call) RunAndReturn(run func(context.Context, grant.ImportFromProviderCriteria) ([]*domain.Grant, error)) *GrantService_ImportFromProvider_Call {
	_c.Call.Return(run)
	return _c
}

// List provides a mock function with given fields: _a0, _a1
func (_m *GrantService) List(_a0 context.Context, _a1 domain.ListGrantsFilter) ([]domain.Grant, error) {
	ret := _m.Called(_a0, _a1)

	var r0 []domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, domain.ListGrantsFilter) ([]domain.Grant, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, domain.ListGrantsFilter) []domain.Grant); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, domain.ListGrantsFilter) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_List_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'List'
type GrantService_List_Call struct {
	*mock.Call
}

// List is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 domain.ListGrantsFilter
func (_e *GrantService_Expecter) List(_a0 interface{}, _a1 interface{}) *GrantService_List_Call {
	return &GrantService_List_Call{Call: _e.mock.On("List", _a0, _a1)}
}

func (_c *GrantService_List_Call) Run(run func(_a0 context.Context, _a1 domain.ListGrantsFilter)) *GrantService_List_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(domain.ListGrantsFilter))
	})
	return _c
}

func (_c *GrantService_List_Call) Return(_a0 []domain.Grant, _a1 error) *GrantService_List_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_List_Call) RunAndReturn(run func(context.Context, domain.ListGrantsFilter) ([]domain.Grant, error)) *GrantService_List_Call {
	_c.Call.Return(run)
	return _c
}

// ListUserRoles provides a mock function with given fields: _a0, _a1
func (_m *GrantService) ListUserRoles(_a0 context.Context, _a1 string) ([]string, error) {
	ret := _m.Called(_a0, _a1)

	var r0 []string
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, string) ([]string, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, string) []string); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]string)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, string) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_ListUserRoles_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListUserRoles'
type GrantService_ListUserRoles_Call struct {
	*mock.Call
}

// ListUserRoles is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 string
func (_e *GrantService_Expecter) ListUserRoles(_a0 interface{}, _a1 interface{}) *GrantService_ListUserRoles_Call {
	return &GrantService_ListUserRoles_Call{Call: _e.mock.On("ListUserRoles", _a0, _a1)}
}

func (_c *GrantService_ListUserRoles_Call) Run(run func(_a0 context.Context, _a1 string)) *GrantService_ListUserRoles_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(string))
	})
	return _c
}

func (_c *GrantService_ListUserRoles_Call) Return(_a0 []string, _a1 error) *GrantService_ListUserRoles_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_ListUserRoles_Call) RunAndReturn(run func(context.Context, string) ([]string, error)) *GrantService_ListUserRoles_Call {
	_c.Call.Return(run)
	return _c
}

// Restore provides a mock function with given fields: ctx, id
func (_m *GrantService) Restore(ctx context.Context, id string) (*domain.Grant, error) {
	ret := _m.Called(ctx, id)

	var r0 *domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, string) (*domain.Grant, error)); ok {
		return rf(ctx, id)
	}
	if rf, ok := ret.Get(0).(func(context.Context, string) *domain.Grant); ok {
		r0 = rf(ctx, id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, string) error); ok {
		r1 = rf(ctx, id)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_Restore_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Restore'
type GrantService_Restore_Call struct {
	*mock.Call
}

// Restore is a helper method to define mock.On call
//   - ctx context.Context
//   - id string
func (_e *GrantService_Expecter) Restore(ctx interface{}, id interface{}) *GrantService_Restore_Call {
	return &GrantService_Restore_Call{Call: _e.mock.On("Restore", ctx, id)}
}

func (_c *GrantService_Restore_Call) Run(run func(ctx context.Context, id string)) *GrantService_Restore_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(string))
	})
	return _c
}

func (_c *GrantService_Restore_Call) Return(_a0 *domain.Grant, _a1 error) *GrantService_Restore_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_Restore_Call) RunAndReturn(run func(context.Context, string) (*domain.Grant, error)) *GrantService_Restore_Call {
	_c.Call.Return(run)
	return _c
}

// Revoke provides a mock function with given fields: ctx, id, actor, reason, opts
func (_m *GrantService) Revoke(ctx context.Context, id string, actor string, reason string, opts ...grant.Option) (*domain.Grant, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, id, actor, reason)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *domain.Grant
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, string, ...grant.Option) (*domain.Grant, error)); ok {
		return rf(ctx, id, actor, reason, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, string, string, string, ...grant.Option) *domain.Grant); ok {
		r0 = rf(ctx, id, actor, reason, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*domain.Grant)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, string, string, string, ...grant.Option) error); ok {
		r1 = rf(ctx, id, actor, reason, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GrantService_Revoke_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Revoke'
type GrantService_Revoke_Call struct {
	*mock.Call
}

// Revoke is a helper method to define mock.On call
//   - ctx context.Context
//   - id string
//   - actor string
//   - reason string
//   - opts ...grant.Option
func (_e *GrantService_Expecter) Revoke(ctx interface{}, id interface{}, actor interface{}, reason interface{}, opts ...interface{}) *GrantService_Revoke_Call {
	return &GrantService_Revoke_Call{Call: _e.mock.On("Revoke",
		append([]interface{}{ctx, id, actor, reason}, opts...)...)}
}

func (_c *GrantService_Revoke_Call) Run(run func(ctx context.Context, id string, actor string, reason string, opts ...grant.Option)) *GrantService_Revoke_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grant.Option, len(args)-4)
		for i, a := range args[4:] {
			if a != nil {
				variadicArgs[i] = a.(grant.Option)
			}
		}
		run(args[0].(context.Context), args[1].(string), args[2].(string), args[3].(string), variadicArgs...)
	})
	return _c
}

func (_c *GrantService_Revoke_Call) Return(_a0 *domain.Grant, _a1 error) *GrantService_Revoke_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *GrantService_Revoke_Call) RunAndReturn(run func(context.Context, string, string, string, ...grant.Option) (*domain.Grant, error)) *GrantService_Revoke_Call {
	_c.Call.Return(run)
	return _c
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *GrantService) Update(_a0 context.Context, _a1 *domain.Grant) error {
	ret := _m.Called(_a0, _a1)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, *domain.Grant) error); ok {
		r0 = rf(_a0, _a1)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// GrantService_Update_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Update'
type GrantService_Update_Call struct {
	*mock.Call
}

// Update is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *domain.Grant
func (_e *GrantService_Expecter) Update(_a0 interface{}, _a1 interface{}) *GrantService_Update_Call {
	return &GrantService_Update_Call{Call: _e.mock.On("Update", _a0, _a1)}
}

func (_c *GrantService_Update_Call) Run(run func(_a0 context.Context, _a1 *domain.Grant)) *GrantService_Update_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*domain.Grant))
	})
	return _c
}

func (_c *GrantService_Update_Call) Return(_a0 error) *GrantService_Update_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *GrantService_Update_Call) RunAndReturn(run func(context.Context, *domain.Grant) error) *GrantService_Update_Call {
	_c.Call.Return(run)
	return _c
}

// NewGrantService creates a new instance of GrantService. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewGrantService(t interface {
	mock.TestingT
	Cleanup(func())
}) *GrantService {
	mock := &GrantService{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
