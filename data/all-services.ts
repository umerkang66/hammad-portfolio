import slugify from 'slugify';
import { Service } from '../common-types/service';

enum Names {
  amazonAccountManagement = 'Amazon Account Management',
  usFormation = 'US LLC / UK LTD Formation',
  amazonAccountCreation = 'Amazon Account Creation',
  productHunting = 'Product Hunting',
  supplierHunting = 'Supplier Hunting',
  productLaunching = 'Product Launching',
  productRanking = 'Product Ranking',
  walmartAccountManagement = 'Walmart Account Management',
  ebayAccountManagement = 'eBay Account Management',
}

export const allServices: Service[] = [
  {
    name: Names.amazonAccountManagement,
    description: '',
    slug: slugify(Names.amazonAccountManagement),
  },
  {
    name: Names.usFormation,
    description: '',
    slug: slugify(Names.usFormation),
  },
  {
    name: Names.amazonAccountCreation,
    description: '',
    slug: slugify(Names.amazonAccountCreation),
  },
  {
    name: Names.productHunting,
    description: '',
    slug: slugify(Names.productHunting),
  },
  {
    name: Names.supplierHunting,
    description: '',
    slug: slugify(Names.supplierHunting),
  },
  {
    name: Names.productLaunching,
    description: '',
    slug: slugify(Names.productLaunching),
  },
  {
    name: Names.productRanking,
    description: '',
    slug: slugify(Names.productRanking),
  },
  {
    name: Names.walmartAccountManagement,
    description: '',
    slug: slugify(Names.walmartAccountManagement),
  },
  {
    name: Names.ebayAccountManagement,
    description: '',
    slug: slugify(Names.ebayAccountManagement),
  },
];
