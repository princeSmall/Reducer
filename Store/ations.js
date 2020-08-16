/**
 * @author: tongle
 *
 * @time: 2020-08-14 18:07
 *
 * @description: 为方便管理action与type统一放在action中
 *
 * @function:
 *
 */

export const INC = 'INC';
export const DEC = 'DEC';

export const increment = () => ({
  type: INC,
});

export const decrement = () => ({
  type: DEC,
});
