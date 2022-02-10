import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import OrderProduct from "./OrderProduct";
  import Client from "../../../../../modules/clients/infra/typeorm/entities/Client";
  
  @Entity("pedidos")
  export default class Order {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column()
    cliente_id: number;
  
    @Column()
    data: Date;
  
    @Column()
    status: string;
  
    @Column()
    forma_pagamento: string;
  
    @Column("float", { scale: 10, precision: 2 })
    valor: number;
  
    @Column("float", { scale: 10, precision: 2 })
    desconto: number;
  
    
    @ManyToOne(() => Client)
    @JoinColumn({ name: "cliente_id" })
    cliente: Client; 
  
    @OneToMany(() => OrderProduct, (order_product) => order_product.pedido, {
      cascade: true,
    })
    pedido_produtos: OrderProduct[];
  
    @CreateDateColumn({ select: false })
    created_at: Date;
  
    @UpdateDateColumn({ select: false })
    updated_at: Date;
  }