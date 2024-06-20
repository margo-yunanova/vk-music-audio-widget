import {
  Avatar,
  Group,
  IconButton,
  SimpleCell,
  usePlatform,
} from '@vkontakte/vkui';

interface ISong {}

export const AudioPlayer = ({ title, artist, cover, time }) => {
  return (
    <Group>
      <SimpleCell
        after={<IconButton label="Обложка" onClick={() => {}}></IconButton>}
        subtitle="Санкт-Петербург, Россия"
        before={<Avatar size={32} />}
        onClick={() => {}}
      >
        VK · Приложение для iPhone !!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </SimpleCell>
    </Group>
  );
};
