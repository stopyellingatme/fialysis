import React from 'react';
import { Segment } from 'semantic-ui-react';
import BarChart from './BarChart';

// Bar Chart Data
const data = [
  {
    "country": "AD",
    "hot dog": 0,
    "hot dogColor": "hsl(61, 70%, 50%)",
    "burger": 77,
    "burgerColor": "hsl(16, 70%, 50%)",
    "sandwich": 41,
    "sandwichColor": "hsl(109, 70%, 50%)",
    "kebab": 147,
    "kebabColor": "hsl(325, 70%, 50%)",
    "fries": 121,
    "friesColor": "hsl(171, 70%, 50%)",
    "donut": 112,
    "donutColor": "hsl(113, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 145,
    "hot dogColor": "hsl(131, 70%, 50%)",
    "burger": 11,
    "burgerColor": "hsl(284, 70%, 50%)",
    "sandwich": 1,
    "sandwichColor": "hsl(152, 70%, 50%)",
    "kebab": 130,
    "kebabColor": "hsl(287, 70%, 50%)",
    "fries": 177,
    "friesColor": "hsl(203, 70%, 50%)",
    "donut": 192,
    "donutColor": "hsl(72, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 19,
    "hot dogColor": "hsl(227, 70%, 50%)",
    "burger": 66,
    "burgerColor": "hsl(5, 70%, 50%)",
    "sandwich": 87,
    "sandwichColor": "hsl(88, 70%, 50%)",
    "kebab": 107,
    "kebabColor": "hsl(327, 70%, 50%)",
    "fries": 107,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 49,
    "donutColor": "hsl(314, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 56,
    "hot dogColor": "hsl(116, 70%, 50%)",
    "burger": 48,
    "burgerColor": "hsl(178, 70%, 50%)",
    "sandwich": 102,
    "sandwichColor": "hsl(169, 70%, 50%)",
    "kebab": 171,
    "kebabColor": "hsl(178, 70%, 50%)",
    "fries": 159,
    "friesColor": "hsl(92, 70%, 50%)",
    "donut": 123,
    "donutColor": "hsl(292, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 54,
    "hot dogColor": "hsl(27, 70%, 50%)",
    "burger": 157,
    "burgerColor": "hsl(152, 70%, 50%)",
    "sandwich": 81,
    "sandwichColor": "hsl(172, 70%, 50%)",
    "kebab": 198,
    "kebabColor": "hsl(295, 70%, 50%)",
    "fries": 17,
    "friesColor": "hsl(109, 70%, 50%)",
    "donut": 12,
    "donutColor": "hsl(20, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 109,
    "hot dogColor": "hsl(26, 70%, 50%)",
    "burger": 99,
    "burgerColor": "hsl(39, 70%, 50%)",
    "sandwich": 84,
    "sandwichColor": "hsl(166, 70%, 50%)",
    "kebab": 88,
    "kebabColor": "hsl(307, 70%, 50%)",
    "fries": 133,
    "friesColor": "hsl(10, 70%, 50%)",
    "donut": 107,
    "donutColor": "hsl(118, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 38,
    "hot dogColor": "hsl(310, 70%, 50%)",
    "burger": 8,
    "burgerColor": "hsl(42, 70%, 50%)",
    "sandwich": 157,
    "sandwichColor": "hsl(228, 70%, 50%)",
    "kebab": 30,
    "kebabColor": "hsl(91, 70%, 50%)",
    "fries": 166,
    "friesColor": "hsl(350, 70%, 50%)",
    "donut": 165,
    "donutColor": "hsl(336, 70%, 50%)"
  }
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Segment className="kit-description-card">
          <BarChart data={data} />
        </Segment>
      </div>
    );
  }
}

export default HomePage;