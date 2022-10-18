import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "default",
    path: `${APP_PREFIX_PATH}/home`,
    title: "основные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "home",
        path: `${APP_PREFIX_PATH}/home/default`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "planner",
        path: `${APP_PREFIX_PATH}/home/default/planner`,
        title: "Планировщик",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/home/default/catalog`,
        title: "Каталог",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "catalog-items",
            path: `${APP_PREFIX_PATH}/home/default/catalog/items`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-category",
            path: `${APP_PREFIX_PATH}/home/default/catalog/category`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-collection",
            path: `${APP_PREFIX_PATH}/home/default/catalog/collection`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-combo",
            path: `${APP_PREFIX_PATH}/home/default/catalog/combo`,
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/home/default/orders`,
        title: "Заказы",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/home/default/clients`,
        title: "Клиенты",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/home/default/clients/list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "clients-group",
            path: `${APP_PREFIX_PATH}/home/default/clients/group`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/home/default/banners`,
        title: "Баннеры",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promocodes",
        path: `${APP_PREFIX_PATH}/home/default/promocodes`,
        title: "Промокоды",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "offline-spot",
        path: `${APP_PREFIX_PATH}/home/default/offline_spot`,
        title: "Оффлайн точка",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "offline-spot-address",
            path: `${APP_PREFIX_PATH}/home/default/offline_spot/address`,
            title: "Адреса",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "offline-spot-geozone",
            path: `${APP_PREFIX_PATH}/home/default/offline_spot/geozone`,
            title: "Геозона",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "staff",
        path: `${APP_PREFIX_PATH}/home/default/staff`,
        title: "Сотрудники",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "newsletters",
        path: `${APP_PREFIX_PATH}/default/newsletters`,
        title: "Рассылки",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: "systems",
    path: `${APP_PREFIX_PATH}/systems`,
    title: "Системные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "systems-setting",
        path: `${APP_PREFIX_PATH}/systems/setting`,
        title: "Настойки",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "systems-mobile-app",
        path: `${APP_PREFIX_PATH}/systems/mobile-app`,
        title: "Мобильное приложение",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "systems-logs",
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: "Логи",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...systemsNavTree];

export default navigationConfig;
