import { asset } from './A';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <span className="logo__mark">
        <img src={asset('/brand/vib-mark.png')} alt="" width={267} height={132} />
      </span>
      <span className="logo__text">
        VIB<span>Tech</span>
        <small>Telco Service Provider</small>
      </span>
    </span>
  );
}
