import { ReactElement } from 'react';

import { useAppSelector } from '@/lib/redux';
import { BookIcon } from './icons/book-icon';
import { SolidBoxIcon } from './icons/box-icon';
import { BurgerMenuIcon } from './icons/burger-menu-icon';
import { ChatBubbleWideIcon } from './icons/chat-bubble-wide-icon';
import { ChatBubblesIcon } from './icons/chat-bubbles-icon';
import { CheckedSquareIcon } from './icons/checked-square-icon';
import { CircleArrowLeftIcon } from './icons/circle-arrow-left-icon';
import { CircleArrowRightIcon } from './icons/circle-arrow-right-icon';
import { CloseIcon } from './icons/close-x-icon';
import { DarkMoonIcon } from './icons/dark-moon-icon';
import { FileIcon } from './icons/file-icon';
import { FolderForChatSessionsIcon } from './icons/folder-chat-icon';
import { FolderIcon } from './icons/folder-icon';
import { LayoutColumnsIcon } from './icons/layout-columns-icon';
import { LayoutWtfIcon } from './icons/layout-wtf-icon';
import { LightSunIcon } from './icons/light-sun-icon';
import { ListIcon } from './icons/list-icon';
import { MaximizeIcon } from './icons/maximize-icon';
import { MinimizeIcon } from './icons/minimize-icon';
import { PlusIcon } from './icons/plus-icon';
import { ResetIcon } from './icons/reset-icon';
import { RunCookbookIcon } from './icons/run-cookbook-icon';
import { SquareIcon } from './icons/square-icon';
import { ArrowLeftIcon } from './icons/arrow-left-icon';
import { ArrowRightIcon } from './icons/arrow-right-icon';
import { TableIcon } from './icons/table-icon';

enum IconName {
  Folder,
  FolderForChatSessions,
  ChatBubbles,
  ChatBubbleWide,
  RunCookbook,
  BurgerMenu,
  DarkMoon,
  LightSun,
  Close,
  CircleArrowRight,
  CircleArrowLeft,
  ArrowLeft,
  ArrowRight,
  Maximize,
  Minimize,
  LayoutWtf,
  LayoutColumns,
  Reset,
  SolidBox,
  Plus,
  Square,
  CheckedSquare,
  List,
  File,
  Book,
  Table,
}

type IconProps = {
  name: IconName;
  size?: number;
  lightModeColor?: string;
  darkModeColor?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent) => void;
};

function Icon(props: IconProps) {
  const {
    name,
    onClick,
    onMouseDown,
    disabled = false,
    size = 20,
    lightModeColor,
    darkModeColor,
  } = props;

  let iconToRender: ReactElement | null = null;
  const isDarkMode = useAppSelector((state) => state.darkMode.value);

  switch (name) {
    case IconName.Folder:
      iconToRender = (
        <FolderIcon
          backColor={isDarkMode ? '#2980b9' : '#701a75'}
          frontColor={isDarkMode ? '#3498db' : '#86198f'}
          midColor="#bdc3c7"
          width={size}
          height={size}
        />
      );
      break;
    case IconName.FolderForChatSessions:
      iconToRender = (
        <FolderForChatSessionsIcon
          backColor={isDarkMode ? '#2980b9' : '#701a75'}
          frontColor={isDarkMode ? '#3498db' : '#86198f'}
          midColor="#bdc3c7"
          chatIconColor={isDarkMode ? '#2980b9' : '#f5d0fe'}
          width={size}
          height={size}
        />
      );
      break;
    case IconName.ChatBubbles:
      iconToRender = (
        <ChatBubblesIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.RunCookbook:
      iconToRender = (
        <RunCookbookIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.BurgerMenu:
      iconToRender = (
        <BurgerMenuIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.DarkMoon:
      iconToRender = (
        <DarkMoonIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.LightSun:
      iconToRender = (
        <LightSunIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Close:
      iconToRender = (
        <CloseIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.CircleArrowRight:
      iconToRender = (
        <CircleArrowRightIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.CircleArrowLeft:
      iconToRender = (
        <CircleArrowLeftIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Maximize:
      iconToRender = (
        <MaximizeIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Minimize:
      iconToRender = (
        <MinimizeIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.LayoutWtf:
      iconToRender = (
        <LayoutWtfIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.LayoutColumns:
      iconToRender = (
        <LayoutColumnsIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.ChatBubbleWide:
      iconToRender = (
        <ChatBubbleWideIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Reset:
      iconToRender = (
        <ResetIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.SolidBox:
      iconToRender = (
        <SolidBoxIcon
          fillColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Plus:
      iconToRender = (
        <PlusIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Square:
      iconToRender = (
        <SquareIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.CheckedSquare:
      iconToRender = (
        <CheckedSquareIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.List:
      iconToRender = (
        <ListIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.File:
      iconToRender = (
        <FileIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Book:
      iconToRender = (
        <BookIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.ArrowLeft:
      iconToRender = (
        <ArrowLeftIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.ArrowRight:
      iconToRender = (
        <ArrowRightIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    case IconName.Table:
      iconToRender = (
        <TableIcon
          outlineColor={
            isDarkMode
              ? darkModeColor || '#FFFFFF'
              : lightModeColor || '#702f8a'
          }
          width={size}
          height={size}
        />
      );
      break;
    default:
      iconToRender = null;
  }

  return (
    <div
      className={`
        flex items-center justify-center 
        cursor-pointer
        ${onClick ? 'hover:opacity-50 active:opacity-25' : ''}
        ${disabled ? 'opacity-20 pointer-events-none' : ''}
      `}
      onClick={disabled ? undefined : onClick}
      onMouseDown={disabled ? undefined : onMouseDown}>
      {iconToRender}
    </div>
  );
}

export {
  Icon,
  IconName,
  BurgerMenuIcon,
  FolderIcon,
  FolderForChatSessionsIcon,
  ChatBubblesIcon,
  RunCookbookIcon,
  CloseIcon,
};
