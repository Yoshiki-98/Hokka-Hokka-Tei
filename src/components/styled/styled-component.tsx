import { styled } from '@mui/system';
import { 
  Select,
  Button,
  Link,
  SelectProps
} from '@mui/material';

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

export { StyledSelect, StyledButton, StyledLink, CustomSelect }
