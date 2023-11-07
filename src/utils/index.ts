import Taro from '@tarojs/taro'

export const getSystemInfo = async () => {
  const systemInfo = await Taro.getSystemInfoSync()

  return systemInfo
}

export const add = (a: number, b: number) => a + b
