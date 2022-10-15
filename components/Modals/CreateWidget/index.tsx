import { useState } from 'react'

export type BoxType = 'iframe' | 'plain-text'

interface Props {
  onGenerate: (value: string, boxType: BoxType) => void
}

export const CreateWidgetModal = ({ onGenerate }: Props) => {
  const [boxType, setBoxType] = useState<BoxType>('iframe')
  const [value, setValue] = useState('')

  const handleGenerateElement = () => {
    if (!value) return

    onGenerate(value, boxType)
    setValue('')
  }

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="btn btn-circle btn-outline modal-button fixed bottom-2 z-50 right-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="font-bold text-lg mb-4">Create a box</h3>
          <div className="w-full flex flex-col gap-6">
            <select
              className="select select-info w-full"
              onChange={(event) => setBoxType(event.target.value as BoxType)}
            >
              <option disabled>Select type of box</option>
              <option value="iframe">Iframe</option>
              <option value="plain-text">Plain Text</option>
            </select>
            {boxType &&
              (boxType === 'iframe' ? (
                <input
                  type="text"
                  placeholder="URL of iframe"
                  className="input input-info w-full"
                  onChange={(e) => setValue(e.target.value)}
                />
              ) : (
                <textarea
                  placeholder="Write something"
                  className="w-full textarea textarea-info"
                  onChange={(e) => setValue(e.target.value)}
                />
              ))}

            <div className="modal-action">
              <label
                htmlFor="my-modal-4"
                className="btn"
                onClick={handleGenerateElement}
              >
                Create!
              </label>
            </div>
          </div>
        </label>
      </label>
    </>
  )
}
