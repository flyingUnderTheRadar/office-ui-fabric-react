import { ICheckboxStyleProps, ICheckboxStyles } from './Checkbox.types';
import {
  getFocusStyle,
  FontSizes
} from '../../Styling';

const MS_CHECKBOX_LABEL_SIZE = '20px';
const MS_CHECKBOX_TRANSITION_DURATION = '200ms';
const MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';

export const getStyles = (props: ICheckboxStyleProps): ICheckboxStyles => {
  const { className, theme, reversed, checked, disabled } = props;
  const { semanticColors } = theme;
  const checkmarkFontColor = semanticColors.inputForegroundChecked;
  const checkmarkFontColorCheckedDisabled = semanticColors.disabledBackground;
  const checkboxBorderColor = semanticColors.smallInputBorder;
  const checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
  const checkboxBorderColorDisabled = semanticColors.disabledBodyText;
  const checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
  const checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
  const checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
  const checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
  const checkboxHoveredTextColor = semanticColors.bodyText;
  const checkboxBackgroundDisabledChecked = semanticColors.disabledBodyText;
  const checkboxTextColor = semanticColors.bodyText;
  const checkboxTextColorDisabled = semanticColors.disabledText;

  return ({
    root: [
      'ms-Checkbox',
      reversed && 'reversed',
      checked && 'is-checked',
      !disabled && 'is-enabled',
      disabled && 'is-disabled',
      getFocusStyle(theme, -3),
      theme.fonts.medium,
      {
        padding: '0',
        border: 'none',
        background: 'none',
        margin: '0',
        outline: 'none',
        display: 'block',
        cursor: 'pointer',
      },
      !disabled && [
        !checked && {
          selectors: {
            ':hover .ms-Checkbox-checkbox': { borderColor: checkboxBorderHoveredColor },
            ':focus .ms-Checkbox-checkbox': { borderColor: checkboxBorderHoveredColor }
          }
        },
        checked && {
          selectors: {
            ':hover .ms-Checkbox-checkbox': {
              background: checkboxBackgroundCheckedHovered,
              borderColor: checkboxBorderColorCheckedHovered
            },
            ':focus .ms-Checkbox-checkbox': {
              background: checkboxBackgroundCheckedHovered,
              borderColor: checkboxBorderColorCheckedHovered
            }
          }
        },
        {
          selectors: {
            ':hover .ms-Checkbox-text': { color: checkboxHoveredTextColor },
            ':focus .ms-Checkbox-text': { color: checkboxHoveredTextColor }
          }
        }
      ],
      className,
    ],
    label: [
      'ms-Checkbox-label',
      {
        display: 'inline-flex',
        margin: '0 -4px',
        alignItems: 'center',
        cursor: disabled ? 'default' : 'pointer',
        position: 'relative',
        userSelect: 'none',
        textAlign: 'left'
      },
      reversed && {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end'
      }
    ],
    checkbox: [
      'ms-Checkbox-checkbox',
      {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: MS_CHECKBOX_LABEL_SIZE,
        width: MS_CHECKBOX_LABEL_SIZE,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: checkboxBorderColor,
        margin: '0 4px',
        boxSizing: 'border-box',
        transitionProperty: 'background, border, border-color',
        transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
        transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,

        /* in case the icon is bigger than the box */
        overflow: 'hidden'
      },
      !disabled && checked && {
        background: checkboxBackgroundChecked,
        borderColor: checkboxBorderColorChecked
      },
      disabled && {
        borderColor: checkboxBorderColorDisabled
      },
      checked && disabled && {
        background: checkboxBackgroundDisabledChecked,
        borderColor: checkboxBorderColorDisabled
      }
    ],
    checkmark: {
      opacity: checked ? '1' : '0',
      color: checked && disabled ? checkmarkFontColorCheckedDisabled : checkmarkFontColor
    },
    text: [
      'ms-Checkbox-text',
      {
        color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
        margin: '0 4px',
        fontSize: FontSizes.medium
      }
    ]
  });
};