import { Button } from '@/components/Button/Button'
import { FormItem } from '@/components/Form/FormItem'
import { Layout } from '@/components/Layout'
import { ModalWithBackground } from '@/components/Modals/ModalWithBackground'
import { TimerContext } from '@/packages/TimerContext'
import { css } from '@emotion/css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const SettingsPage = () => {
  const { setTime, time } = useContext(TimerContext)

  return (
    <ModalWithBackground width={300}>
      <h1 style={{ marginTop: 0 }}>Settings</h1>
      <Layout
        position='vertical'
        justifyContent='space-between'
        alignItems='center'
      >
        <Layout position='vertical' alignItems='center'>
          <FormItem
            label='Hours: '
            type='number'
            min={0}
            max={23}
            value={time.hours ?? 0}
            onChange={(e) =>
              setTime({ ...time, hours: Number(e.target.value) })
            }
          />
          <FormItem
            label='Minutes: '
            type='number'
            min={0}
            max={59}
            value={time.minutes ?? 0}
            onChange={(e) =>
              setTime({ ...time, minutes: Number(e.target.value) })
            }
          />
          <FormItem
            label='Seconds: '
            type='number'
            min={0}
            max={59}
            value={time.seconds ?? 0}
            onChange={(e) =>
              setTime({ ...time, seconds: Number(e.target.value) })
            }
          />
        </Layout>
        <Link to={'/'} className={css({ width: '100%' })}>
          <Button className={css({ marginTop: '10px', width: '100%' })}>
            Go to timer
          </Button>
        </Link>
      </Layout>
    </ModalWithBackground>
  )
}
