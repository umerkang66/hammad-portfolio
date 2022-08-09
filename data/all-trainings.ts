import slugify from 'slugify';
import { Training } from '../common-types/training';

const trainingsName = {
  wholesaleFba: 'Wholesale FBA',
  amazonPrivateLabel: 'Amazon Private Label',
  dropshipping: 'Dropshipping',
  virtualAssistant: 'Virtual Assistant',
};

export const allTrainings: Training[] = [
  {
    name: trainingsName.wholesaleFba,
    excerptDesc:
      'The main objective of this course is to learn how to sell other brands on amazon. You can learn how to find the distributors and how to get reseller certificates and authority letters.  How to hunt the Wholesale products according to different pricing techniques, Profit calculation.',
    description:
      'This first amazon training.-----This first amazon training.-----This first amazon training.-----This first amazon training.',
    slug: slugify(trainingsName.wholesaleFba.toLowerCase()),
  },
  {
    name: trainingsName.amazonPrivateLabel,
    excerptDesc:
      'The main objective of this course is to learn how to create your own brand on Amazon. Amazon account opening. How to register your brand on Amazon, how to hunt source and launch your products. How to check patents. Register trademark, Promotional techniques. How to use different tools. How to find supplier using tools.',
    description:
      'This first amazon training.-----This first amazon training.-----This first amazon training.-----This first amazon training.',
    slug: slugify(trainingsName.amazonPrivateLabel.toLowerCase()),
  },
  {
    name: trainingsName.dropshipping,
    excerptDesc:
      'The main objective of this course is learning how to find retailers in specific market, how to hunt dropship products, how to find dead listings and make them alive. What are the policies of drop shipping on Amazon? How to use different tools. How to manage orders shipments and to learn how to handle customer support.',
    description:
      'This first amazon training.-----This first amazon training.-----This first amazon training.-----This first amazon training.',
    slug: slugify(trainingsName.dropshipping.toLowerCase()),
  },
  {
    name: trainingsName.virtualAssistant,
    excerptDesc:
      'This course is for those who are students or freelancers who have not any investment but they have passion to learn new skills and provide services to their clients. In this course you can learn about how manage seller central account and how to rank your Client’s product from scratch and build an empire. You will learn which services a virtual assistant can provide.',
    description:
      'This first amazon training.-----This first amazon training.-----This first amazon training.-----This first amazon training.',
    slug: slugify(trainingsName.virtualAssistant.toLowerCase()),
  },
];
