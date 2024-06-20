import { Icon28AddOutline } from '@vkontakte/icons';
import { Popover, Div, CellButton } from '@vkontakte/vkui';
import { FC, ReactElement } from 'react';

interface IPopover {
  button: ReactElement;
  content: string[];
}

export const PopoverWithAllTriggers: FC<IPopover> = ({ button, content }) => {
  return (
    <Popover
      trigger={['click', 'hover', 'focus']}
      placement="right"
      role="tooltip"
      aria-describedby="tooltip-3"
      content={
        <Div>
          {content.map((item) => (
            <CellButton onClick={() => {}} before={<Icon28AddOutline />}>
              {item}
            </CellButton>
          ))}
        </Div>
      }
    >
      {button}
    </Popover>
  );
};
