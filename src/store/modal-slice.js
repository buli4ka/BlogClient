import { createSlice } from '@reduxjs/toolkit';

import { MODAL_SIZES, MODALS } from '../constants/modals';

const modalItemTemplate = {
  props: {},
  visible: false,
  size: MODAL_SIZES.LARGE,
};

export const initialState = {
  modals: {
    [MODALS.LOGIN]: { ...modalItemTemplate },
    [MODALS.REGISTRATION]: { ...modalItemTemplate },
    [MODALS.COMMENT]: { ...modalItemTemplate },
  },
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    init: (state, { payload }) => {
      state.modals[payload.id] = {
        visible: false,
        props: payload.props ?? {},
        size: payload.size,
      };
    },
    showModal: (state, { payload }) => {
      state.modals[payload.id] = {
        ...state.modals[payload.id],
        visible: true,
        props: { ...state.modals[payload.id].props, ...payload.props ?? {} },
      };
    },
    hideModal: (state, { payload }) => {
      state.modals[payload.id].visible = false;
    },
    hideAllModal: (state) => {
      Object.keys(state.modals)
        .forEach(modalItem => state.modals[modalItem].visible = false);
    },
  },
});

export const getVisibleModalsSelector = state => Object.entries(state.modal.modals).filter(([, modalItem]) => modalItem.visible);
export const getModalsSelector = state => state.modal.modals;
export const isModalVisibleSelector = modalId => state => Boolean(state.modal.modals[modalId]?.visible);

export const { init, showModal, hideModal, hideAllModal } = slice.actions;

export default slice.reducer;
