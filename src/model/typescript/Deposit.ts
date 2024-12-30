import { DepositType } from "./DepositType";

/**
 * Required amount of deposit.
 */

export interface Deposit {
  /**
   * Amount of deposit.
   */
  amount: number;
  /**
   * Type of deposit.
   */
  type?: DepositType;
}