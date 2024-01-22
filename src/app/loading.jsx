"use client"

import { TailSpin } from 'react-loader-spinner'

const Loading = () => {

  return (
    <div style={{ display: 'flex', alignItems:"center",justifyContent: "center", width: "100%", height: "100%" }}>
      <TailSpin
        visible={true}
        height="120"
        width="120"
        color="#3673fd"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  )
}

export default Loading