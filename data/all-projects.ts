import { Project } from '../common-types/project';
import slugify from 'slugify';

const servicesName = {
  service1: 'Service 1',
  service2: 'Service 2',
  service3: 'Service 3',
  service4: 'Service 4',
  service5: 'Service 5',
};

export const allProjects: Project[] = [
  {
    name: servicesName.service1,
    description:
      'This is the description of the first dummy service, This one I did back when i was starting out my career. This is the description of the first dummy service, this one i did back when i was starting out my career',
    slug: slugify(servicesName.service1),
    excerpt:
      'This is the description of the first dummy service, This one I did back when i was starting out my career.',
    isFeatured: true,
  },

  {
    name: servicesName.service2,
    description:
      'This is the description of the second dummy service, This one I did back when i was starting out my career. This is the description of the first dummy service, this one i did back when i was starting out my career',
    slug: slugify(servicesName.service2),
    excerpt:
      'This is the description of the second dummy service, This one I did back when i was starting out my career.',
    isFeatured: true,
  },

  {
    name: servicesName.service3,
    description:
      'This is the description of the first dummy service, This one I did back when i was starting out my career. This is the description of the first dummy service, this one i did back when i was starting out my career',
    slug: slugify(servicesName.service3),
    excerpt:
      'This is the description of the first dummy service, This one I did back when i was starting out my career.',
    isFeatured: true,
  },

  {
    name: servicesName.service4,
    description:
      'This is the description of the first dummy service, This one I did back when i was starting out my career. This is the description of the first dummy service, this one i did back when i was starting out my career',
    slug: slugify(servicesName.service4),
    excerpt:
      'This is the description of the first dummy service, This one I did back when i was starting out my career.',
    isFeatured: false,
  },

  {
    name: servicesName.service5,
    description:
      'This is the description of the first dummy service, This one I did back when i was starting out my career. This is the description of the first dummy service, this one i did back when i was starting out my career',
    slug: slugify(servicesName.service5),
    excerpt:
      'This is the description of the first dummy service, This one I did back when i was starting out my career.',
    isFeatured: false,
  },
];
