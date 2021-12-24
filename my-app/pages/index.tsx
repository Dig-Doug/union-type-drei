import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from "react-bootstrap";
// NOTE: Removing the drei import removes the issue
import {OrbitControls} from '@react-three/drei';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>
        Test
      </Button>
    </div>
  )
}
