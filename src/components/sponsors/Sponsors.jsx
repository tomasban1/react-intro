import { Button } from '../button/button';
import style from './Sponsors.module.css';

export function Sponsors() {
    return (
        <section className={style.sponsors}>
          <Button url="" text="Sponsor Vite"/>
          <Button url="" text="Sponsor Me"/>
        </section>
    );
}