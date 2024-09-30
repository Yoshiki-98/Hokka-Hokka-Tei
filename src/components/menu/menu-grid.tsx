import React from 'react';
import { Box, Typography } from '@mui/material';
import FadeInSection from './fade-in-section';
import { StyledLink } from '../styled/styled-component';
import MenuListContainer from '../svg/container/menu-list-container';
import { Menu } from '@/types/menu';

interface MenuGridProps {
  menuItems: Menu[] | undefined;
  isLargeWindow?: any;
  activeTab?: any;
}

const MenuGrid: React.FC<MenuGridProps> = ({ menuItems, isLargeWindow, activeTab }) => {
  const columnCount = isLargeWindow ? 3 : 2;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {menuItems && menuItems.map((item, index) => (
        <FadeInSection key={item.id} trigger={activeTab} delay={index * 100}>
          <Box
            sx={{
              width: { xs: '170px', sm: '250px', md: '380px' },
              maxWidth: '100%',
              position: 'relative',
              margin: { xs: '0 10px 20px', sm: '0 15px 30px' },
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: `calc(${100 / columnCount}% - 30px)`,
            }}
          >
            <StyledLink href={`/menu/${item.id}`}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <MenuListContainer item={item} />
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 5, md: 10 },
                    top: { xs: '125px', sm: '147.5px', md: '237.5px' },
                  }}
                >
                  <Typography
                    sx={{
                      display: 'inline-block',
                      color: 'white',
                      fontWeight: 'bold',
                      backgroundColor: '#FFF',
                      px: 1,
                      fontSize: { xs: '14px', sm: '18px', md: '24px' },
                    }}
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography color="#000" gutterBottom sx={{ whiteSpace: 'nowrap' }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '24px', sm: '30px', md: '36px' },
                      }}
                    >
                      {item.price}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: '14px', sm: '18px', md: '20px' },
                      }}
                    >
                      円 (税込{item.taxIncludedPrice}円)
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </StyledLink>
          </Box>
        </FadeInSection>
      ))}
    </Box>
  );
};

export default MenuGrid;
