import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
import Order from "../../../../Orders/infra/typeorm/entities/Order";
  
  @Entity("clientes")
  export default class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    email: string;

    @Column()
    cpf: string;
  
    @Column()
    telefone: string;
  
    @Column()
    data_nascimento: string;

    @OneToMany(() => Order, (order) => order.cliente, {
      cascade: true,
    })
    pedidos: Order[];
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }