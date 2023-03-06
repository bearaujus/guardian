package domain

type NotificationMessages struct {
	ExpirationReminder   string `mapstructure:"expiration_reminder"`
	AppealApproved       string `mapstructure:"appeal_approved"`
	AppealRejected       string `mapstructure:"appeal_rejected"`
	AccessRevoked        string `mapstructure:"access_revoked"`
	ApproverNotification string `mapstructure:"approver_notification"`
	OthersAppealApproved string `mapstructure:"others_appeal_approved"`
}

const (
	NotificationTypeExpirationReminder     = "ExpirationReminder"
	NotificationTypeAppealApproved         = "AppealApproved"
	NotificationTypeOnBehalfAppealApproved = "OnBehalfAppealApproved"
	NotificationTypeAppealRejected         = "AppealRejected"
	NotificationTypeAccessRevoked          = "AccessRevoked"
	NotificationTypeApproverNotification   = "ApproverNotification"
)

type NotificationMessage struct {
	Type      string
	Variables map[string]interface{}
}

type Notification struct {
	User    string
	Message NotificationMessage
}
