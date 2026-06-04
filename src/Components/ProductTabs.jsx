import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex',justifyContent:'center' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Deatils & Care" {...a11yProps(1)} />
          <Tab label="Shipping & Returns" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="text-center max-w-2xl mx-auto">                  <p className="text-gray-600 leading-relaxed">Enhance your spring style with the HG "CHANGE YOUR MIND" Printed Cotton Vest. Crafted from soft, breathable cotton, this vest features a striking "CHANGE YOUR MIND" graphic in Turquoise Green, adding a unique touch to any look. Stay cool and make a statement with this versatile piece.
</p>
</div>


      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
          <div className="text-center max-w-2xl mx-auto">                  <p className="text-gray-600 leading-relaxed">Product details and care instructions will appear here.

</p>
</div>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
          <div className="text-center max-w-2xl mx-auto">                  <p className="text-gray-600 leading-relaxed">Free shipping on orders over $100. 30-day return policy.

</p>
</div>

      </CustomTabPanel>
    </Box>
  );
}