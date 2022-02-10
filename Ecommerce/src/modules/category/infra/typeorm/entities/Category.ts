import Product from "../../../../Products/infra/typeorm/entities/Product";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";


@Entity("categorias")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;


  @OneToMany(() => Product, (product) => product.categoria)
  produtos: Product[]; 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}