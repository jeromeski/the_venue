import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer 
      anchor='right'
      open={props.open}
      onClose={() => props.onClose()}
    >
      <List component='nav'>
       <ListItem>
        Event start in
       </ListItem>
       <ListItem>
        Venue info
       </ListItem>
       <ListItem>
        Highlights
       </ListItem>
       <ListItem>
        Pricing
       </ListItem>
       <ListItem>
        Location
       </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;