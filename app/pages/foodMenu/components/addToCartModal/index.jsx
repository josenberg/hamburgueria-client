import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import ReactModal from 'react-modal';

import IngredientsPicker from '@/components/ingredientsPicker';
import Grid from '@/components/grid';

import { addToCart } from '@/state/cart/actions';
import { updateItemIngredientQuantity } from '@//utilities/order';

import * as styles from './style';

const AddToCartModal = ({
  item,
  closeModal,
  updateItem,
  ingredients,
  rules,
  addItemToCart,
}) => (
  <ReactModal
    isOpen={!isNil(item)}
    style={styles.modalStyles}
    ariaHideApp={false}
  >
    {!isNil(item) ? (
      <Grid rows="auto auto auto" columns="1fr">
        <Grid.Cell row="1" column="1" style={styles.titleContainer}>
          <h1 style={styles.title}> Adicionar ao carrinho </h1>
        </Grid.Cell>
        <Grid.Cell row="2" column="1">
          <IngredientsPicker
            ingredients={ingredients}
            item={item}
            rules={rules}
            updateItem={(ingredientId, quantity) => {
              updateItemIngredientQuantity(updateItem, ingredients, item, ingredientId, quantity);
            }}
            onRefuse={closeModal}
            onAccept={() => {
              addItemToCart(item);
              closeModal();
            }}
          />
        </Grid.Cell>
      </Grid>
    ) : null}
  </ReactModal>
);

AddToCartModal.propTypes = {
  item: PropTypes.object,
  ingredients: PropTypes.array,
  rules: PropTypes.array,
  closeModal: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addItemToCart: addToCart,
};

export default connect(null, mapDispatchToProps)(AddToCartModal);
