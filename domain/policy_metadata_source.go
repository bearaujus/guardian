package domain

import (
	"encoding/json"
	"fmt"
)

type AppealMetadataSource struct {
	Name        string      `json:"name" yaml:"name"`
	Description string      `json:"description,omitempty" yaml:"description,omitempty"`
	Type        string      `json:"type" yaml:"type"`
	Config      interface{} `json:"config,omitempty" yaml:"config,omitempty"`
	Value       interface{} `json:"value" yaml:"value"`
}

func (c *AppealMetadataSource) EncryptConfig(enc Encryptor) error {
	configStr, err := json.Marshal(c.Config)
	if err != nil {
		return fmt.Errorf("failed to json.Marshal config: %w", err)
	}

	encryptedConfig, err := enc.Encrypt(string(configStr))
	if err != nil {
		return err
	}
	c.Config = encryptedConfig

	return nil
}

func (c *AppealMetadataSource) DecryptConfig(dec Decryptor) error {
	configStr, ok := c.Config.(string)
	if !ok {
		return fmt.Errorf("invalid config type: %T, expected string", c.Config)
	}
	decryptedConfig, err := dec.Decrypt(string(configStr))
	if err != nil {
		return err
	}

	var cfg interface{}
	if err := json.Unmarshal([]byte(decryptedConfig), &cfg); err != nil {
		return fmt.Errorf("failed to json.Unmarshal config: %w", err)
	}
	c.Config = cfg

	return nil
}
