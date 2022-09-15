package model

import (
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
	"github.com/odpf/guardian/domain"
	"gorm.io/gorm"
)

type Grant struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	Status         string
	AccountID      string
	AccountType    string
	ResourceID     string
	Role           string
	Permissions    pq.StringArray `gorm:"type:text[]"`
	ExpirationDate time.Time
	AppealID       string
	RevokedBy      string
	RevokedAt      time.Time
	RevokeReason   string
	CreatedBy      string
	CreatedAt      time.Time      `gorm:"autoCreateTime"`
	UpdatedAt      time.Time      `gorm:"autoUpdateTime"`
	DeletedAt      gorm.DeletedAt `gorm:"index"`

	Resource *Resource `gorm:"ForeignKey:ResourceID;References:ID"`
	Appeal   *Appeal   `gorm:"ForeignKey:AppealID;References:ID"`
}

func (m *Grant) FromDomain(g domain.Grant) error {
	if g.ID != "" {
		uuid, err := uuid.Parse(g.ID)
		if err != nil {
			return fmt.Errorf("parsing uuid: %w", err)
		}
		m.ID = uuid
	}

	if g.Resource != nil {
		r := new(Resource)
		if err := r.FromDomain(g.Resource); err != nil {
			return fmt.Errorf("parsing resource: %w", err)
		}
		m.Resource = r
	}

	if g.Appeal != nil {
		appeal := new(Appeal)
		if err := appeal.FromDomain(g.Appeal); err != nil {
			return fmt.Errorf("parsing appeal: %w", err)
		}
		m.Appeal = appeal
	}

	if g.ExpirationDate != nil {
		m.ExpirationDate = *g.ExpirationDate
	}

	if g.RevokedAt != nil {
		m.RevokedAt = *g.RevokedAt
	}

	m.Status = string(g.Status)
	m.AccountID = g.AccountID
	m.AccountType = g.AccountType
	m.ResourceID = g.ResourceID
	m.Role = g.Role
	m.Permissions = pq.StringArray(g.Permissions)
	m.AppealID = g.AppealID
	m.RevokedBy = g.RevokedBy
	m.RevokeReason = g.RevokeReason
	m.CreatedBy = g.CreatedBy
	m.CreatedAt = g.CreatedAt
	m.UpdatedAt = g.UpdatedAt
	return nil
}

func (m Grant) ToDomain() (*domain.Grant, error) {
	grant := &domain.Grant{
		ID:           m.ID.String(),
		Status:       domain.GrantStatus(m.Status),
		AccountID:    m.AccountID,
		AccountType:  m.AccountType,
		ResourceID:   m.ResourceID,
		Role:         m.Role,
		Permissions:  []string(m.Permissions),
		AppealID:     m.AppealID,
		RevokedBy:    m.RevokedBy,
		RevokeReason: m.RevokeReason,
		CreatedBy:    m.CreatedBy,
		CreatedAt:    m.CreatedAt,
		UpdatedAt:    m.UpdatedAt,
	}

	if m.Resource != nil {
		r, err := m.Resource.ToDomain()
		if err != nil {
			return nil, fmt.Errorf("parsing resource: %w", err)
		}
		grant.Resource = r
	}

	if m.Appeal != nil {
		a, err := m.Appeal.ToDomain()
		if err != nil {
			return nil, fmt.Errorf("parsing appeal: %w", err)
		}
		grant.Appeal = a
	}

	if !m.ExpirationDate.IsZero() {
		grant.ExpirationDate = &m.ExpirationDate
	}
	if !m.RevokedAt.IsZero() {
		grant.RevokedAt = &m.RevokedAt
	}

	return grant, nil
}