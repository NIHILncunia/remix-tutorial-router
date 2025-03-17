import type { Route } from './+types/Home';
import { setMeta } from '~/utils';

export const loader = (
  async ({ request, }: Route.LoaderArgs) => {
    return {};
  }
);

export const action = (
  async ({ request, }: Route.ActionArgs) => {
    return {};
  }
);

export const meta = ({}: Route.MetaArgs) => {
  return setMeta({
    data: {
      title: `홈`,
      url: `/`,
    },
  });
};

export default function HomePage({}: Route.ComponentProps) {
  return (
    <div>content</div>
  );
}
