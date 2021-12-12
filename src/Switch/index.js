import React from 'react';

export default function Switch({ fallback, children }) {
	if (!children) {
		if (fallback) return fallback;
		return null;
	}

	return (
		<React.Fragment>
			{React.Children.map(children, (child, index) => (
				<React.Fragment key={`switch-child-${index}`}>{child}</React.Fragment>
			))}
		</React.Fragment>
	);
}
