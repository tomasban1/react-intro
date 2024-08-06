import { Feature } from './Feature';
import style from './Features.module.css';

export function Features() {
    return (
        <section className={style.featuresList}>
          <Feature icon="💡" title="Instant server start" description="On demand file serving over native ESM, no bundling required!"/>
          <Feature icon="💡" title="Lightning fast HMR!" description="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
          <Feature icon="💡" title="Rich features!" description="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
          <Feature icon="💡" title="Optimized build" description="Pre-configured Rollup build with multi-page and library mode support."/>
          <Feature icon="💡" title="Universal plugins" description="Rollup-superset plugin interface shared between dev and build"/>
          <Feature icon="💡" title="Fully typed APIs" description="Flexible programmatic APIs with full TypeScript typing."/>
        </section>
    );
}