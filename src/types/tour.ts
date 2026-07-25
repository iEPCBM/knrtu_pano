export interface TourData {
    name: string
    scenes: Scene[]
}

export interface TourSettings {
    mouseViewMode: 'drag' | 'qtvr'
    autorotateEnabled: boolean
    fullscreenButton: boolean
}

export interface Scene {
    id: string
    name: string

    levels: Level[]

    faceSize: number

    initialViewParameters: ViewParameters

    viewLimits?: ViewLimits

    linkHotspots: LinkHotspot[]

    infoHotspots: InfoHotspot[]
}

export interface Level {
    tileSize: number
    size: number
    fallbackOnly?: boolean
}

export interface ViewParameters {
    yaw: number
    pitch: number
    fov: number
}

export interface ViewLimits {

    yaw?: {
        min: number
        max: number
    }

    pitch?: {
        min: number
        max: number
    }

    fov?: {
        min: number
        max: number
    }

}

export interface LinkHotspot {
    yaw: number
    pitch: number

    rotation: number

    target: string
}

export interface InfoHotspot {
    yaw: number
    pitch: number

    title: string
    text: string
}