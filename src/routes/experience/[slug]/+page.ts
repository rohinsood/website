import { error } from '@sveltejs/kit';
import { experiences } from '$lib/experiences';
export function entries() { return experiences.map(({ slug }) => ({ slug })); }
export function load({ params }: { params: { slug: string } }) {
  const experience = experiences.find(item => item.slug === params.slug);
  if (!experience) error(404, 'Experience not found');
  return { experience };
}
