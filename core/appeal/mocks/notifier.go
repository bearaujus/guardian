// Code generated by mockery v2.10.0. DO NOT EDIT.

package mocks

import (
	domain "github.com/odpf/guardian/domain"
	mock "github.com/stretchr/testify/mock"
)

// Notifier is an autogenerated mock type for the notifier type
type Notifier struct {
	mock.Mock
}

type Notifier_Expecter struct {
	mock *mock.Mock
}

func (_m *Notifier) EXPECT() *Notifier_Expecter {
	return &Notifier_Expecter{mock: &_m.Mock}
}

// GetUserEmail provides a mock function with given fields: userId
func (_m *Notifier) GetUserEmail(userId string) (string, error) {
	ret := _m.Called(userId)

	var r0 string
	if rf, ok := ret.Get(0).(func(string) string); ok {
		r0 = rf(userId)
	} else {
		r0 = ret.Get(0).(string)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(string) error); ok {
		r1 = rf(userId)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Notify provides a mock function with given fields: _a0
func (_m *Notifier) Notify(_a0 []domain.Notification) []error {
	ret := _m.Called(_a0)

	var r0 []error
	if rf, ok := ret.Get(0).(func([]domain.Notification) []error); ok {
		r0 = rf(_a0)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]error)
		}
	}

	return r0
}

// Notifier_Notify_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Notify'
type Notifier_Notify_Call struct {
	*mock.Call
}

// Notify is a helper method to define mock.On call
//  - _a0 []domain.Notification
func (_e *Notifier_Expecter) Notify(_a0 interface{}) *Notifier_Notify_Call {
	return &Notifier_Notify_Call{Call: _e.mock.On("Notify", _a0)}
}

func (_c *Notifier_Notify_Call) Run(run func(_a0 []domain.Notification)) *Notifier_Notify_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].([]domain.Notification))
	})
	return _c
}

func (_c *Notifier_Notify_Call) Return(_a0 []error) *Notifier_Notify_Call {
	_c.Call.Return(_a0)
	return _c
}
