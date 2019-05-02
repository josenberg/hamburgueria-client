import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import ReactModal from 'react-modal';

import IngredientsPicker from '@/components/ingredientsPicker';
import Grid from '@/components/grid';
import Button from '@/components/button';


import { addToCart } from '@/state/cart/actions';

import * as styles from './style';

export const updateItemIngredientQuantity = (updateItem, ingredientList, item, id, quantity) => {
  if (quantity < 0) {
    return;
  }
  let newIngredients;
  const itemHasIngridient = item.ingredients.some(({ id: ingredientId }) => ingredientId === id);
  if (itemHasIngridient) {
    newIngredients = item.ingredients.map((ingredient) => {
      if (ingredient.id !== id) {
        return ingredient;
      }

      return {
        ...ingredient,
        quantity,
      };
    });
  } else {
    newIngredients = [
      ...item.ingredients,
      {
        ...ingredientList.find(({ id: ingredientId }) => ingredientId === id),
        quantity,
      },
    ];
  }
  updateItem({
    ...item,
    ingredients: newIngredients,
  });
};

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
          />
        </Grid.Cell>
        <Grid.Cell row="3" column="1">
          <Grid rows="auto" columns="1fr 1fr" columnGap="20px" style={styles.controlsContainer}>
            <Grid.Cell row="1" column="1">
              <Button
                onClickAction={closeModal}
                type="cancel"
                label="Cancel"
              />
            </Grid.Cell>
            <Grid.Cell row="1" column="2">
              <Button
                onClickAction={() => {
                  addItemToCart(item);
                  closeModal();
                }}
                type="primary"
                style={styles.addToCartButton}
                label="Add To Cart"
              />
            </Grid.Cell>
          </Grid>
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
