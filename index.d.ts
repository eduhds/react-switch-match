import { ReactNode, ReactElement } from 'react';

type SwitchProps = {
	fallback?: ReactNode;
	children: ReactNode;
};

type MatchProps = {
	when: boolean;
	children: ReactNode;
};

export function Switch(props: SwitchProps): ReactElement | null;

export function Match(props: MatchProps): ReactElement | null;
