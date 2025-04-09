import { providers } from 'ethers'

const FEE_RECIPIENT_ADDRESS = '0xC6927e8e6A8B966fC3cBDfFB639c9db459A8C5D5'

export const addFeeToTransaction = (
  transaction: providers.TransactionRequest
): providers.TransactionRequest => {
  // Calcola una fee del 0.3% dell'importo della transazione
  if (transaction.value) {
    const value = BigInt(transaction.value.toString())
    const fee = (value * BigInt(3)) / BigInt(1000) // 0.3%
    
    // Aggiungi la fee al valore totale
    transaction.value = (value + fee).toString()
    
    // Imposta l'indirizzo del destinatario della fee
    if (!transaction.to) {
      transaction.to = FEE_RECIPIENT_ADDRESS
    }
  }

  return transaction
} 