interface tabBarItem {
  text: string
  iconPath: string
  pagePath: string
}
type tabBarList = tabBarItem[]

export interface tabBarProps {
  tabBarList?: tabBarList
}
