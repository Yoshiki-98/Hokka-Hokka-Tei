import React from 'react';
import { styled } from '@mui/material/styles';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuRightArrow from '../svg/icon/hamburger-menu-right-arrow';

type StyledListItemProps<C extends React.ElementType> = ListItemProps<C, { component?: C }> & {
  component?: C;
};

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'component',
})<StyledListItemProps<'a' | 'li'>>(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(1),
  overflow: 'hidden',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: '3px',
    backgroundColor: 'rgb(238, 0, 38)',
    transition: 'width 0.5s ease',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    color: 'rgb(238, 0, 38)',

    '&::after': {
      width: '100%',
    },

    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
    },
  },
}));

interface CustomListItemProps {
  item: {
    link: string;
    text: string;
  };
  responsiveTypography: React.CSSProperties;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ item, responsiveTypography }) => (
  <StyledListItem component="a" href={item.link}>
    <ListItemText 
      primary={item.text}
      primaryTypographyProps={{
        sx: responsiveTypography
      }}
    />
    <MenuRightArrow />
  </StyledListItem>
);

export default CustomListItem;
