import React from 'react';

export default function Match({ when, children }) {
	if (when !== true) {
		return null;
	}

	return <React.Fragment>{children}</React.Fragment>;
}
