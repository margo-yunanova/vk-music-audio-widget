import { Popover, Div, CellButton } from '@vkontakte/vkui';
import { FC, ReactElement } from 'react';

export interface IPopover {
  button: ReactElement;
  content: { title: string; icon: ReactElement }[];
}

export const PopoverWithAllTriggers: FC<IPopover> = ({ button, content }) => {
  return (
    <Popover
      trigger={['hover', 'focus']}
      placement="right"
      role="tooltip"
      aria-describedby="tooltip-3"
      content={
        <Div onClick={(e) => e.stopPropagation()}>
          {content.map((item, i) => (
            <CellButton key={i} onClick={() => {}} before={item.icon}>
              {item.title}
            </CellButton>
          ))}
        </Div>
      }
    >
      {button}
    </Popover>
  );
};
