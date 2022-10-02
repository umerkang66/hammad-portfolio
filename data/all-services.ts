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
    slug: slugify(Names.amazonAccountManagement.toLowerCase()),
  },
  {
    name: Names.usFormation,
    description: '',
    slug: slugify(Names.usFormation.toLowerCase()),
  },
  {
    name: Names.amazonAccountCreation,
    description: '',
    slug: slugify(Names.amazonAccountCreation.toLowerCase()),
  },
  {
    name: Names.productHunting,
    description: '',
    slug: slugify(Names.productHunting.toLowerCase()),
  },
  {
    name: Names.supplierHunting,
    description: '',
    slug: slugify(Names.supplierHunting.toLowerCase()),
  },
  {
    name: Names.productLaunching,
    description: '',
    slug: slugify(Names.productLaunching.toLowerCase()),
  },
  {
    name: Names.productRanking,
    description: '',
    slug: slugify(Names.productRanking.toLowerCase()),
  },
  {
    name: Names.walmartAccountManagement,
    description: '',
    slug: slugify(Names.walmartAccountManagement.toLowerCase()),
  },
  {
    name: Names.ebayAccountManagement,
    description: '',
    slug: slugify(Names.ebayAccountManagement.toLowerCase()),
  },
];
