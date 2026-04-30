"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { useBalanceUpdate } from "@repo/store";
import { FiCheck, FiX, FiLoader } from "react-icons/fi";
import { revalidatePath } from "next/cache";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
//     const updateBalance = useBalanceUpdate();

    const handleSend = async () => {
        if (!number || !amount || Number(amount) <= 0) {
            setError("Please enter valid number and amount");
            return;
        }
        setLoading(true);
        setError("");
        setSuccess(false);
        try {
            const result = await p2pTransfer(number, Number(amount) * 100);
            if (result?.message) {
                setError(result.message);
            } else {
                setSuccess(true);
                // Refresh balance globally
                revalidatePath('/dashboard');
//                 updateBalance(Date.now()); // Trigger update
                // Clear form
                setTimeout(() => {
                    setSuccess(false);
                    setNumber("");
                    setAmount("");
                }, 3000);
            }
        } catch (err: any) {
            setError(err.message || "Transfer failed");
        } finally {
            setLoading(false);
        }
    };

    return <div className="h-[90vh]">
        <Center>
            <Card title="Send Money">
                <div className="min-w-72 pt-2 space-y-4">
                    <TextInput 
                        placeholder={"Phone number"} 
                        label="Recipient Number" 
                        onChange={(value) => {
                            setNumber(value);
                            if (error) setError("");
                        }} 
                    />
                    <TextInput 
                        placeholder={"₹ 100"} 
                        label="Amount" 
                        onChange={(value) => {
                            setAmount(value);
                            if (error) setError("");
                        }} 
                    />
                    <div className="pt-4 flex justify-center">
                        <Button 
                            onClick={handleSend}
                            disabled={loading || success}
                            className={success ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                            {loading ? (
                                <>
                                    <FiLoader className="w-4 h-4 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : success ? (
                                <>
                                    <FiCheck className="w-4 h-4 mr-2" />
                                    Sent!
                                </>
                            ) : (
                                "Send Money"
                            )}
                        </Button>
                    </div>
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm animate-bounce">
                            <FiX className="inline w-4 h-4 mr-1" />
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-xl text-sm animate-pulse">
                            <FiCheck className="inline w-4 h-4 mr-1" />
                            Money sent successfully! Balance updated.
                        </div>
                    )}
                </div>
            </Card>
        </Center>
    </div>
}
