import { RootState } from "./store"; // Предположим, что у вас есть тип RootState, представляющий корневое состояние Redux

export const selectIsSubmit = (state: RootState): boolean =>
  state.user.isSubmit;
