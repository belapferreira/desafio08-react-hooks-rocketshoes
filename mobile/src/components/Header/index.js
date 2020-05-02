import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoContainer,
  Logo,
  CartContainer,
  ItemCount,
} from './styles';

export default function Header({ navigate }) {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <LogoContainer onPress={() => navigate('Home')}>
        <Logo />
      </LogoContainer>

      <CartContainer onPress={() => navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </CartContainer>
    </Container>
  );
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
};
