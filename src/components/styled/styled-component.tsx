import { styled } from '@mui/system';
import { 
  Select,
  Button,
  Link,
  SelectProps
} from '@mui/material';

const tabStyle = {
  padding: 0,
  color: '#323232',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
};

const activeTabStyle = {
  ...tabStyle,
};

const activeTextStyle = {
  fontWeight: 'bold',
  borderBottom: '3px solid #EE0026',
}

const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: 200,
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'red',
  color: 'black',
  '&:hover': {
    backgroundColor: 'black',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  marginBottom: '24px',
}));

// カスタムセレクトコンポーネント
const CustomSelect = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StraightBottomButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  whiteSpace: 'nowrap',
  borderRadius: '0',
}));

export {
  tabStyle,
  activeTabStyle,
  activeTextStyle,
  StyledSelect,
  StyledButton,
  StyledLink,
  CustomSelect,
  StraightBottomButton
}
