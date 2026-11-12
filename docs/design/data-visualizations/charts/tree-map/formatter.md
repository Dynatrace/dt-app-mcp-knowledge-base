## Formatter

The `TreeMap` component expects a structured tree object with a value and an optional unit, by default this optional unit will be appended to the specified value, if it is included. There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead. Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value is applied in the tooltip. The use cases below outline each of these scenarios.

**Formatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import { TreeMap, TreeMapData } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const sales: TreeMapData = {
  tree: {
    name: 'Products',
    value: 49829490152,
    nodes: [
      {
        name: 'Electronics',
        value: 14514935852,
        nodes: [
          {
            name: 'Laptop',
            value: 753198634,
          },
          {
            name: 'Smartphone',
            value: 451994563,
          },
          {
            name: 'Tablet',
            value: 904609560,
          },
          {
            name: 'Headphone',
            value: 96251227,
          },
          {
            name: 'Camera',
            value: 915941,
          },
          {
            name: 'Speaker',
            value: 591528438,
          },
          {
            name: 'Smart TV',
            value: 551624469,
          },
          {
            name: 'Bluetooth Speaker',
            value: 118740939,
          },
          {
            name: 'Wireless Charger',
            value: 923335197,
          },
          {
            name: 'Gaming Console',
            value: 602710059,
          },
          {
            name: 'VR Headset',
            value: 654533722,
          },
          {
            name: 'Drone',
            value: 288917818,
          },
          {
            name: 'Smart Watch',
            value: 869945360,
          },
          {
            name: 'E-reader',
            value: 858782659,
          },
          {
            name: 'Portable Projector',
            value: 593637527,
          },
          {
            name: 'Robot Vacuum',
            value: 660251249,
          },
          {
            name: 'Air Purifier',
            value: 131671566,
          },
          {
            name: 'Electric Toothbrush',
            value: 564761319,
          },
          {
            name: 'Hair Dryer',
            value: 316120380,
          },
          {
            name: 'Microwave Oven',
            value: 889597627,
          },
          {
            name: 'Coffee Maker',
            value: 457451234,
          },
          {
            name: 'Digital Camera',
            value: 829942428,
          },
          {
            name: 'Fitness Tracker',
            value: 516443464,
          },
          {
            name: 'Keyboard',
            value: 755739116,
          },
          {
            name: 'Mouse',
            value: 553099640,
          },
          {
            name: 'Printer',
            value: 579131716,
          },
        ],
      },
      {
        name: 'Clothing',
        value: 2782578138,
        nodes: [
          {
            name: 'Shirt',
            value: 357341335,
          },
          {
            name: 'Jeans',
            value: 413329215,
          },
          {
            name: 'Jacket',
            value: 915314258,
          },
          {
            name: 'Shoes',
            value: 368507865,
          },
          {
            name: 'Dress',
            value: 349560952,
          },
          {
            name: 'Skirt',
            value: 378524513,
          },
        ],
      },
      {
        name: 'Books',
        value: 2212496555,
        nodes: [
          {
            name: 'Fiction',
            value: 265831248,
          },
          {
            name: 'Non-fiction',
            value: 755363149,
          },
          {
            name: "Children's",
            value: 40843243,
          },
          {
            name: 'Biography',
            value: 562875324,
          },
          {
            name: 'Poetry',
            value: 587583591,
          },
        ],
      },
      {
        name: 'Food',
        value: 2758749398,
        nodes: [
          {
            name: 'Pizza',
            value: 665491136,
          },
          {
            name: 'Burger',
            value: 237486948,
          },
          {
            name: 'Salad',
            value: 223351515,
          },
          {
            name: 'Sushi',
            value: 854585672,
          },
          {
            name: 'Cake',
            value: 343538825,
          },
          {
            name: 'Ice cream',
            value: 434295302,
          },
        ],
      },
      {
        name: 'Home & Garden',
        value: 22905558180,
        nodes: [
          {
            name: 'Sofa',
            value: 756080200,
          },
          {
            name: 'Coffee Table',
            value: 9305015,
          },
          {
            name: 'Bookshelf',
            value: 370107741,
          },
          {
            name: 'Lamp',
            value: 878243654,
          },
          {
            name: 'Rug',
            value: 746877573,
          },
          {
            name: 'Curtains',
            value: 531984610,
          },
          {
            name: 'Pillow',
            value: 335516914,
          },
          {
            name: 'Blanket',
            value: 241106148,
          },
          {
            name: 'Clock',
            value: 943846518,
          },
          {
            name: 'Mirror',
            value: 47850750,
          },
          {
            name: 'Vase',
            value: 191014478,
          },
          {
            name: 'Candle',
            value: 237396559,
          },
          {
            name: 'Picture Frame',
            value: 616844046,
          },
          {
            name: 'Wall Art',
            value: 143311019,
          },
          {
            name: 'Refrigerator',
            value: 97443673,
          },
          {
            name: 'Stove',
            value: 262988282,
          },
          {
            name: 'Dishwasher',
            value: 635760465,
          },
          {
            name: 'Microwave',
            value: 933899536,
          },
          {
            name: 'Toaster',
            value: 716641224,
          },
          {
            name: 'Blender',
            value: 376962792,
          },
          {
            name: 'Kettle',
            value: 190217935,
          },
          {
            name: 'Knife Set',
            value: 682880193,
          },
          {
            name: 'Cutting Board',
            value: 604756401,
          },
          {
            name: 'Cookware Set',
            value: 610023068,
          },
          {
            name: 'Dinnerware Set',
            value: 520344655,
          },
          {
            name: 'Glassware Set',
            value: 550894934,
          },
          {
            name: 'Flatware Set',
            value: 223546901,
          },
          {
            name: 'Napkin Set',
            value: 354396574,
          },
          {
            name: 'Tablecloth',
            value: 447700670,
          },
          {
            name: 'Placemat',
            value: 857599804,
          },
          {
            name: 'Chair',
            value: 511695630,
          },
          {
            name: 'Desk',
            value: 287966112,
          },
          {
            name: 'TV Stand',
            value: 789818065,
          },
          {
            name: 'Fan',
            value: 209919919,
          },
          {
            name: 'Heater',
            value: 889737655,
          },
          {
            name: 'Humidifier',
            value: 809559390,
          },
          {
            name: 'Duvet',
            value: 126692960,
          },
          {
            name: 'Mattress',
            value: 177214456,
          },
          {
            name: 'Towel',
            value: 430456371,
          },
          {
            name: 'Bath Mat',
            value: 430177269,
          },
          {
            name: 'Shower Curtain',
            value: 19069090,
          },
          {
            name: 'Soap Dispenser',
            value: 107654965,
          },
          {
            name: 'Toothbrush Holder',
            value: 222842831,
          },
          {
            name: 'Trash Can',
            value: 222995741,
          },
          {
            name: 'Laundry Basket',
            value: 731599563,
          },
          {
            name: 'Iron',
            value: 443895116,
          },
          {
            name: 'Vacuum Cleaner',
            value: 549012342,
          },
          {
            name: 'Mop',
            value: 904930441,
          },
          {
            name: 'Broom',
            value: 444379001,
          },
          {
            name: 'Dustpan',
            value: 480398931,
          },
        ],
      },
      {
        name: 'Sports & Fitness',
        value: 4655172029,
        nodes: [
          {
            name: 'Treadmill',
            value: 271354288,
          },
          {
            name: 'Yoga Mat',
            value: 566083041,
          },
          {
            name: 'Dumbbell',
            value: 500192342,
          },
          {
            name: 'Skipping Rope',
            value: 696118981,
          },
          {
            name: 'Resistance Band',
            value: 642746996,
          },
          {
            name: 'Bicycle',
            value: 113483048,
          },
          {
            name: 'Helmet',
            value: 73066617,
          },
          {
            name: 'Tennis Racket',
            value: 435882261,
          },
          {
            name: 'Golf Club',
            value: 689648063,
          },
          {
            name: 'Swimming Goggles',
            value: 666596392,
          },
        ],
      },
    ],
  },
  unit: 'USD',
};

const population: TreeMapData = {
  tree: {
    name: '',
    value: 0,
    nodes: [
      {
        name: 'India',
        value: 117200000,
        nodes: [
          {
            name: 'Delhi',
            value: 27000000,
          },
          {
            name: 'Mumbai',
            value: 21600000,
          },
          {
            name: 'Kolkata',
            value: 15600000,
          },
          {
            name: 'Chennai',
            value: 11100000,
          },
          {
            name: 'Bangalore',
            value: 10800000,
          },
          {
            name: 'Hyderabad',
            value: 9900000,
          },
          {
            name: 'Ahmedabad',
            value: 8100000,
          },
          {
            name: 'Pune',
            value: 6600000,
          },
          {
            name: 'Surat',
            value: 6500000,
          },
        ],
      },
      {
        name: 'China',
        value: 166200000,
        nodes: [
          {
            name: 'Shanghai',
            value: 25600000,
          },
          {
            name: 'Beijing',
            value: 22000000,
          },
          {
            name: 'Chongqing',
            value: 16300000,
          },
          {
            name: 'Tianjin',
            value: 13600000,
          },
          {
            name: 'Guangzhou',
            value: 13100000,
          },
          {
            name: 'Shenzhen',
            value: 12400000,
          },
          {
            name: 'Chengdu',
            value: 10200000,
          },
          {
            name: 'Nanjing',
            value: 9300000,
          },
          {
            name: 'Wuhan',
            value: 8500000,
          },
          {
            name: 'Hangzhou',
            value: 7800000,
          },
          {
            name: 'Xi\u2019an',
            value: 7100000,
          },
          {
            name: 'Changsha',
            value: 6900000,
          },
          {
            name: 'Harbin',
            value: 6800000,
          },
          {
            name: 'Zhengzhou',
            value: 6600000,
          },
        ],
      },
      {
        name: 'United States',
        value: 68600000,
        nodes: [
          {
            name: 'New York City',
            value: 18800000,
          },
          {
            name: 'Los Angeles',
            value: 13100000,
          },
          {
            name: 'Chicago',
            value: 9500000,
          },
          {
            name: 'Dallas-Fort Worth',
            value: 7600000,
          },
          {
            name: 'Houston',
            value: 7100000,
          },
          {
            name: 'Washington DC',
            value: 6300000,
          },
          {
            name: 'Miami',
            value: 6200000,
          },
        ],
      },
      {
        name: 'Indonesia',
        value: 17300000,
        nodes: [
          {
            name: 'Jakarta',
            value: 10800000,
          },
          {
            name: 'Surabaya',
            value: 6500000,
          },
        ],
      },
      {
        name: 'Pakistan',
        value: 29000000,
        nodes: [
          {
            name: 'Karachi',
            value: 16600000,
          },
          {
            name: 'Lahore',
            value: 12400000,
          },
        ],
      },
      {
        name: 'Nigeria',
        value: 14800000,
        nodes: [
          {
            name: 'Lagos',
            value: 14800000,
          },
        ],
      },
      {
        name: 'Brazil',
        value: 35200000,
        nodes: [
          {
            name: 'Sao Paulo',
            value: 21900000,
          },
          {
            name: 'Rio de Janeiro',
            value: 13300000,
          },
        ],
      },
      {
        name: 'Bangladesh',
        value: 21100000,
        nodes: [
          {
            name: 'Dhaka',
            value: 21100000,
          },
        ],
      },
      {
        name: 'Russia',
        value: 18700000,
        nodes: [
          {
            name: 'Moscow',
            value: 13100000,
          },
          {
            name: 'Saint Petersburg',
            value: 5600000,
          },
        ],
      },
      {
        name: 'Mexico',
        value: 21700000,
        nodes: [
          {
            name: 'Mexico City',
            value: 21700000,
          },
        ],
      },
    ],
  },
  unit: 'inhabitants',
};

const Formatter = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <TreeMap data={sales} formatter={undefined} />

      <TreeMap
        data={sales}
        // highlight-next-line
        formatter={(value, unit) => `${unit} ${Math.round(value)}`}
      />

      <TreeMap data={sales} formatter={{ suffix: 'money' }} />

      <TreeMap
        data={population}
        formatter={(value, unit) => `${unit} ${Math.round(value)}`}
      />

      <TreeMap
        data={population}
        formatter={{
          abbreviate: true,
          maximumFractionDigits: 10,
        }}
      />

      <TreeMap
        data={population}
        formatter={{
          // TODO: Adapt to non deprecated code - APPDEV-10743
          // oxlint-disable-next-line typescript/no-deprecated
          input: units.currency.usd,
        }}
      />
    </Flex>
  );
};
```
