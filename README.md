# simple-react-video-thumbnail

This react component is designed to provide a quick, seamless way to display an html5 video component, and to select a point from the video to use as a thumbnail.

Please note that for full functionality, the video link provided must pass CORS requirements.

In browsers that do not support full functionality, or when thumbnail generation fails. there are two fallback behaviors:

1. a grey overlay with the play button displayed
2. directly showing the video element.

## Props

Currently, the component uses only two properties, the video source URL(string), and the time in seconds of the frame that you want to use as a thumbnail (number).

## Usage

```
import VideoPlayer from 'simple-react-video-thumbnail'

// ...
render() {

  return (
    <div>
      <VideoPlayer videoUrl={'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'} snapshotAt={10} />
    </div>
  )
}
```

## Testing and Development

This component uses React Storybook, you may need to enable CORS in your browser in order to properly use current test cases.

This package was bootstrapped using https://github.com/damaera/publish-react-component

## Future development, milestones, and known issues

1. enable SCSS styling OR migrate styling to one of: styled-components, JSS, or emotion.
2. factor out dependancy on react-video-thumbnail
3. improve browser support
4. improve customizability - pass down styles, props, and element replacements through props
5. add additional testing and eslint
6. resolve dependancy security issues found by github
